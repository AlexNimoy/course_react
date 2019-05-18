import { connect } from "react-redux";
import { fetchProducts } from '~/src/actions/Products';
import Products from '~/src/components/pages/Cart/Products';

const stateToProps = (state) => ({
  items: state.products.entries,
  isFetching: state.products.isFetching,
  error: state.products.error,
  cart: state.cart.entries
});

const actionsToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(stateToProps, actionsToProps)(Products);
