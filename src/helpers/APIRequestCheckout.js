import APICall from 'helpers/APICall';

const APIRequestCheckout = ({values}) => {
  return APICall({
    endpoint: '/checkout',
    method: 'POST',
    payload: values
  });
}

export default APIRequestCheckout;
