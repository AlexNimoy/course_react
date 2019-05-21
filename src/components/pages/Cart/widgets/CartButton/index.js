import { connect } from "react-redux";

import CartButton from './CartButton';

const stateToProps = (state) => ({
  items: state.cart.entries
});

export default connect(stateToProps)(CartButton);
