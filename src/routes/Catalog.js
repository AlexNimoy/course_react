import { mainPath } from "~/src/helpers/routes";
import Catalog from '~/src/components/pages/Catalog';

export default {
  path: mainPath(),
  component: Catalog,
  exact: true,
  strict: true
}
