import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Routes from '../client/Routes';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

export default (req, store, context) => {
 const content = renderToString(
  <Provider store={store}>
   <StaticRouter location={req.path} context={context}>
    <div>{renderRoutes(Routes)}</div>
   </StaticRouter>
  </Provider>
 );
 const helmet = Helmet.renderStatic();
 return `<html>
 <head>
  ${helmet.title.toString()}
${helmet.meta.toString()}
<meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css">
<link rel="stylesheet" href="styles.css">
 </head>
 <body>
   <div id="root">${content}</div>
   <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
   <script src="https://js.stripe.com/v3/"></script>

   <script src="bundle.js"></script>


</body></html>`;
};
