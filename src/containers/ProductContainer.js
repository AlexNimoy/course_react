import { connect } from "react-redux";
import { fetchProducts } from '~/src/actions/Products';
import  Product from '~/src/components/pages/Product/Product';

const stateToProps = (state) => ({
  items: state.products.entries,
  isFetching: state.products.isFetching,
  error: state.products.error
});

const actionsToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(stateToProps, actionsToProps)(Product);
