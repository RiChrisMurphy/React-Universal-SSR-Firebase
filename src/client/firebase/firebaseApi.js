// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { config } from '../../config';
import axios from 'axios';

class FirebaseApi {
 static initAuth() {
  firebase.initializeApp(config);
  return new Promise((resolve, reject) => {
   const unsub = firebase.auth().onAuthStateChanged(
    user => {
     //console.log(unsub(), 'unsub?');
     //unsub();
     resolve(user);
    },
    error => reject(error)
   );
  });
 }
 static LoginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
   .auth()
   .signInWithPopup(provider)
   .then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    return user;
   })
   .catch(function(error) {
    throw error;
   });
 }

 static Logout() {
  return firebase.auth().signOut();
 }
 /*static LoginWithFacebook(callback) {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('public_profile');

  return firebase
   .auth()
   .signInWithPopup(provider)
   .then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(token, "token", user, "user")
    //callback(user, token);
   })
   .catch(function(error) {
    throw error;
   });
 }

*/
 static authSignOut() {
  return firebase.auth().signOut();
 }
}

export default FirebaseApi;
