import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

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
