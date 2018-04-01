import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignInWithGoogle } from '../actions/authActions';
import MyStoreCheckout from '../components/Stripe/MyStoreCheckout';
import ModalApp from '../components/modal/modal.js';
const BookGenres = [
 'Science fiction',
 'Satire',
 'Drama',
 'Action and Adventure',
 'Romance',
 'Mystery',
 'Horror',
 'Self help',
 'Health',
 'Guide',
 'Travel',
 "Children's",
 'Religion, Spirituality & New Age',
 'Science',
 'History',
 'Math',
 'Anthology',
 'Poetry',
 'Encyclopedias',
 'Dictionaries',
 'Comics',
 'Art',
 'Cookbooks',
 'Diaries',
 'Journals',
 'Prayer books',
 'Series',
 'Trilogy',
 'Biographies',
 'Autobiographies',
 'Fantasy'
];

class ProductPage extends Component {
 render() {
  const { auth, SignInWithGoogle } = this.props;
  //const InLoggedIn = auth ? StripeModal : SignInWithGoogle;
  return (
   <div className="detailsPage" style={{ minHeight: 300 }}>
    <div className="fl w-100">
     <form id="paper" className="mw9 mw7-ns center">
      <div id="margin">Details</div>
      <textarea
       className="fl w-100"
       placeholder="Please enter synopsis"
       id="text"
       name="text"
       rows="8"
       style={{
        overflow: 'hidden',
        wordWrap: 'break-word',
        resize: 'none',
        height: '160px'
       }}
      />
     </form>
    </div>
    <section className="mw5 mw7-ns center tc">
     <h1 className="mt0">Centered Container</h1>
     <ModalApp>
      <div className="fl w-100">
       <MyStoreCheckout />
      </div>
     </ModalApp>
    </section>
   </div>
  );
 }
}

function mapStateToProps({ auth }) {
 return { auth };
}

export default {
 component: connect(mapStateToProps, { SignInWithGoogle })(ProductPage)
 //loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
