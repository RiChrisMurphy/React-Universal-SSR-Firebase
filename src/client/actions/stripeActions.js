export const PayWithStripe = token => (dispatch, getState, api) => {
 return api
  .post('/pay', {
   stripetoken: token
  })
  .then(response => {
   return response.data;
  })
  .catch(error => {
   return error.response.data;
  });
};
