import { connect } from "react-redux";
import { addToCart } from 'actions/Cart';
import Section from './Section';

const stateToProps = (state) => ({
  items: state.cart.entries
});

const actonAddToCart = (dispatch) => ({
  addToCart: (id, quantity) => dispatch(addToCart(id, quantity))
});

export default connect(stateToProps, actonAddToCart)(Section);
