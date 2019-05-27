import { mainPath } from "~/src/helpers/routes";
import Catalog from '~/src/components/pages/Catalog';
import { fetchProducts } from '~/src/actions/Products';

export default {
  path: mainPath(),
  component: Catalog,
  prepareData: (store) =>  {
    store.dispatch(fetchProducts());
  },
  exact: true,
  strict: true
}
