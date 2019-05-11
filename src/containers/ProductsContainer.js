import { connect } from "react-redux";
import { fetchProducts } from '~/src/actions/Products';
import  Catalog from '~/src/components/pages/Catalog/Catalog';

const stateToProps = (state) => ({
  items: state.products.entries,
  isFetching: state.products.isFetching,
  error: state.products.error
});

const actionsToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(stateToProps, actionsToProps)(Catalog);
