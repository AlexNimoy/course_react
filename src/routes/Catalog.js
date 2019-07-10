import { mainPath } from "helpers/routes";
import Catalog from 'components/pages/Catalog';
import { fetchProducts } from 'actions/Products';

export default {
  path: mainPath(),
  component: Catalog,
  prepareData: (store) =>  {
    return store.dispatch(fetchProducts());
  },
  exact: true,
  strict: true
}
