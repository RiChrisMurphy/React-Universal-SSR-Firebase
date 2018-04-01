import React from 'react';
import MyStoreCheckout from '../components/Stripe/MyStoreCheckout';
import backy from '../styling/book.jpg';
import { Link } from 'react-router-dom';
const HomePage = () => {
 return (
  <div
   style={{
    backgroundImage: `url(${backy})`,
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
   }}
  >
   <div className="bg-black-80 h-100">
    <section className="mw5 mw7-ns center pa3 ph5-ns text-center">
     <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">
      WE MAKE YOUR TITLE GREAT
     </h1>
     <h2 className="fw1 f3 white-80 mt3 mb4">
      Best titles for the best people
     </h2>
     <Link
      className="f12 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3"
      to="/details"
     >
      Call to Action
     </Link>
    </section>
   </div>
  </div>
 );
};

export default {
 component: HomePage
};
