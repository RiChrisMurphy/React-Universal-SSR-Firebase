import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { StripeProvider } from 'react-stripe-elements';
import Footer from './components/footer';
import clientKeys from './clientKeys';

class App extends Component {
 constructor(props) {
  super(props);

  this.state = { stripe: null };
 }
 componentDidMount() {
  this.setState({ stripe: window.Stripe(clientKeys.stripePublicDev) });
 }

 render() {
  const { route } = this.props;
  return (
   <StripeProvider stripe={this.state.stripe}>
    <div className="Avenir">
     <Header />

     {renderRoutes(route.routes)}
     <Footer />
    </div>
   </StripeProvider>
  );
 }
}
export default {
 component: App
 /* loadData: ({ dispatch }) => {
  return dispatch(fetchCurrentUser());
 }*/
};
