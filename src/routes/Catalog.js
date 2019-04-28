import { catalogPath } from "../helpers/routes";
import CatalogPath from "../components/views/Catalog";

export default {
  path: catalogPath(),
  component: CatalogPath,
  exact: true
}
