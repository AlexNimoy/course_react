import React from 'react';

const AddToCartButton = (props) => (
  <button
    onClick={() => props.addToCart(props.children, props.quantity)}
  >
    Buy
  </button>
)

export default AddToCartButton;
