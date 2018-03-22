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
const serviceAccount = Keys.serviceAccount;

const firebase = admin.initializeApp({
 credential: admin.credential.cert(serviceAccount),
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
  cookie: { maxAge: 604800000, secure: true } // week
 })
);
app.use((req, res, next) => {
 req.firebaseServer = firebase;
 next();
});

app.use('/api', proxy('http://localhost:3000/'));

app.use(express.static('public'));

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

app.listen(3000, () => {
 console.log('listening on port 3000');
});
