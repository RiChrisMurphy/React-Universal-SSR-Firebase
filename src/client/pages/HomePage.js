import React from 'react';
import UserLogin from './UserLogin';
const HomePage = () => {
 return (
  <div className="center-align" style={{ marginTop: 200 }}>
   <h3> Welcome</h3>
   <p>Check out these awesome features</p>
   <UserLogin />
  </div>
 );
};

export default {
 component: HomePage
};
