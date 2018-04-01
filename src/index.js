import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import proxy from 'express-http-proxy';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const Keys = require('./keys');
import axios from 'axios';

import stripePackage from 'stripe';
const stripe = stripePackage(Keys.stripeSecretDev);

//

let newWorld = {};
const GetStockData = async () => {
 const res = await axios
  .get(
   `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=${
    Keys.alphAvantage
   }`,
   { Authorization: Keys.alphAvantage }
  )
  .then(response => {
   return response.data['Time Series (Daily)'];
  });
 newWorld = res;
 return res;
};

const GetNewsData = async querry => {
 let d = new Date();
 d.setDate(d.getDate() - 7);
 const monthNumber = d.getMonth() + 1;
 let datemonth = monthNumber < 10 ? '0' + monthNumber : monthNumber;
 const datestring = `${d.getYear()}-${datemonth}-${d.getDate()}`;
 console.log(datestring);
 const url = `https://newsapi.org/v2/everything?q=Apple&from=${datestring}0&sortBy=popularity&apiKey=${
  Keys.newsApi
 }`;
 const res = await axios.get(`
  ${querryurl}
 `);
};

GetNewsData(url);

GetStockData();
setInterval(GetStockData, 60000);

const firebase = admin.initializeApp({
 credential: admin.credential.cert(Keys.serviceAccount),
 databaseURL: Keys.firedatabaseURL
});

const app = express();

app.use(bodyParser.json());
app.use(
 session({
  secret: Keys.sessionSecret,
  saveUninitialized: true,
  store: new FileStore({ path: '/tmp/sessions', secret: Keys.sessionSecret }),
  resave: false,
  rolling: true,
  httpOnly: true,
  cookie: { maxAge: 1, secure: true } // week
 })
);
/*app.use((req, res, next) => {
 req.firebaseServer = firebase;
 next();
});*/

app.use('/api', proxy('http://localhost:3000/'));

app.use(express.static('public'));

app.get('/stockdata', (req, res) => {
 res.json(newWorld);
});

app.post('/pay', (req, res) => {
 if (!req.body) return res.sendStatus(400);
 if (!req.session.decodedToken) {
  return res.status(401).send({ message: 'HELLO WORLD' });
 }
 if (!req.body.stripetoken) return res.sendStatus(400);
 const token = req.body.stripetoken.id;
 stripe.charges.create(
  {
   amount: 3000,
   currency: 'usd',
   source: token, // obtained with Stripe.js
   description: `Charge for Title Turner's Title Naming service for`
  },
  function(err, charge) {
   if (err) {
    res.status(200).json(err);
   }
   res.status(200).json(charge);
  }
 );
});

app.post('/login', (req, res) => {
 if (!req.body) return res.sendStatus(400);
 const token = req.body.token;
 firebase
  .auth()
  .verifyIdToken(token)
  .then(decodedToken => {
   req.session.decodedToken = decodedToken;
   return decodedToken;
  })
  .then(decodedToken => {
   res.json({ status: true, decodedToken });
  })
  .catch(error => res.json({ error }));
});

app.post('/logout', (req, res) => {
 req.session.decodedToken = null;
 res.json({ status: true });
});

app.get('*', (req, res) => {
 const store = createStore(req);
 const promises = matchRoutes(Routes, req.path)
  .map(({ route }) => {
   return route.loadData ? route.loadData(store) : null;
  })
  .map(promise => {
   if (promise) {
    return new Promise((resolve, reject) => {
     promise.then(resolve).catch(resolve);
    });
   }
  });
 Promise.all(promises).then(() => {
  const context = {};
  const content = renderer(req, store, context);
  if (context.url) {
   return res.redirect(301, context.url);
  }
  if (context.notFound) {
   res.status(404);
  }
  res.send(content);
 });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
 console.log('listening on port 3000');
});
