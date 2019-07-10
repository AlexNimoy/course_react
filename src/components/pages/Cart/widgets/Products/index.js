import { connect } from 'react-redux';
import { fetchProducts } from 'actions/Products';
import Products from './Products';


const productList = state => {
  const cart = state.cart.entries;
  const products = state.products.entries.data || [];

  return (
    cart.map((item) =>
      ({
        ...item,
        product: products.find(x => x.id === item.id)
      })
    )
  )
}

const stateToProps = (state) => ({
  items: state.products.entries,
  isFetching: state.products.isFetching,
  error: state.products.error,
  cart: state.cart.entries,
  cartProducts: productList(state)
});

const actionsToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(stateToProps, actionsToProps)(Products);
