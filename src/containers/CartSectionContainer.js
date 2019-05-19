import { connect } from "react-redux";
import { addToCart } from '~/src/actions/Cart';
import CartSection from '~/src/components/pages/Cart/Section';

const stateToProps = (state) => ({
  items: state.cart.entries
});

const actonAddToCart = (dispatch) => ({
  addToCart: (id, quantity) => dispatch(addToCart(id, quantity))
});

export default connect(stateToProps, actonAddToCart)(CartSection);
