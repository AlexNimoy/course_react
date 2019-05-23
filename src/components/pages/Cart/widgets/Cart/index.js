import { connect } from "react-redux";

import Cart from './Cart';

const stateToProps = (state) => ({
  items: state.cart.entries
});

export default connect(stateToProps)(Cart);
