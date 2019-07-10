import { connect } from "react-redux";
import { fetchProducts } from 'actions/Products';
import  Product from './Product';

const findProduct = (state, ownProps) => {
  const products = state.products.entries.data ?
    state.products.entries.data : [];
  return products.find(s => s.id == ownProps.children)
}

const stateToProps = (state, ownProps) => ({
  items: state.products.entries,
  isFetching: state.products.isFetching,
  error: state.products.error,
  product: findProduct(state, ownProps)
});

const actionsToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(stateToProps, actionsToProps)(Product);
