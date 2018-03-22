import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LogOut } from '../actions/authActions';

const Header = ({ auth, LogOut }) => {
 console.log('my auth status is', auth);
 const authButton = auth.isLogged ? (
  <a onClick={LogOut}>Logout</a>
 ) : (
  <a href="/api/auth/google">Log in</a>
 );
 return (
  <nav>
   <div className="nav-wrapper">
    <Link to="/" className="brand-logo">
     Conscientious SSR
    </Link>
    <ul className="right">
     <li>
      <Link to="/users">Users</Link>
     </li>
     <li>
      <Link to="/admins">Admins</Link>
     </li>
     <li>{authButton}</li>
    </ul>
   </div>
  </nav>
 );
};

function mapStateToProps({ auth }) {
 return { auth };
}

export default connect(mapStateToProps, { LogOut })(Header);
