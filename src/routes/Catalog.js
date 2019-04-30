import { mainPath } from "~/src/helpers/routes";
import CatalogPage from '~/src/components/CatalogPage';

export default {
  path: mainPath(),
  component: CatalogPage,
  exact: true
}
