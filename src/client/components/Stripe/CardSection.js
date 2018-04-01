import React from 'react';
import { CardElement } from 'react-stripe-elements';
const style = {
 base: {
  iconColor: '#001d87',
  color: '#003a87',
  fontWeight: 500,
  fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
  fontSize: '16px',
  fontSmoothing: 'antialiased',
  backgroundColor: '#7795f8',

  ':-webkit-autofill': {
   color: '#fce883'
  },
  '::placeholder': {
   color: '#87BBFD'
  }
 },
 invalid: {
  iconColor: '#FFC7EE',
  color: '#FFC7EE'
 }
};
class CardSection extends React.Component {
 render() {
  return (
   <label>
    <CardElement style={style} />
   </label>
  );
 }
}

export default CardSection;
