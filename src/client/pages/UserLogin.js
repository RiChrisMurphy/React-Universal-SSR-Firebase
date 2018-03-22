import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { SignInWithGoogle } from '../actions/authActions';

class UserLogin extends Component {
 createUser = event => {
  event.preventDefault();
  this.props
   .SignInWithGoogle()
   .then(user => {
    console.log(user, 'User off Google Login');
   })
   .catch(error => {});
 };

 render() {
  return (
   <div style={{ textAlign: 'center', marginBottom: 10 }}>
    <button style={{ cursor: 'pointer' }} onClick={this.createUser}>
     Login with Google
    </button>
   </div>
  );
 }
}

function mapStateToProps(state) {
 return {};
}

function loadData(store) {
 return; //store.dispatch(fetchUsers());
}

export default connect(mapStateToProps, { SignInWithGoogle })(UserLogin);
