import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';
import ProductPage from './pages/ProductPage';
import BabaStockPage from './pages/BabaStockPage';

const Route = [
 {
  ...App,
  routes: [
   {
    ...HomePage,
    path: '/',
    exact: true
   },
   {
    ...ProductPage,
    path: '/details',
    exact: true
   },
   {
    ...BabaStockPage,
    path: '/baba',
    exact: true
   },

   {
    ...NotFoundPage
   }
  ]
 }
];

export default Route;
/*{
 ...AdminsListPage,
 path: '/admins'
 {
  ...UsersListPage,
  path: '/users'
 },
},*/
