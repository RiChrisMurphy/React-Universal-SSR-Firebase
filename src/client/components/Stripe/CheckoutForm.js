import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import { PayWithStripe } from '../../actions/stripeActions';
import { connect } from 'react-redux';

import CardSection from './CardSection';

class CheckoutForm extends React.Component {
 handleSubmit = ev => {
  // We don't want to let default form submission happen here, which would refresh the page.
  ev.preventDefault();

  // Within the context of `Elements`, this call to createToken knows which Element to
  // tokenize, since there's only one in this group.
  this.props.stripe.createToken({ name: 'Jenny Rosen' }).then(({ token }) => {
   console.log(token, 'at checkoutform');
   this.props.PayWithStripe(token);
  });

  // However, this line of code will do the same thing:
  // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
 };

 render() {
  return (
   <div className="Checkout">
    <form className="StripeForm" onSubmit={this.handleSubmit}>
     <label className="StripeLabel">
      Enter Card
      <CardSection />
     </label>

     <button className="StripeButton">Confirm order</button>
    </form>
   </div>
  );
 }
}

function mapStateToProps({ auth }) {
 return { auth };
}

export default connect(mapStateToProps, { PayWithStripe })(
 injectStripe(CheckoutForm)
);
