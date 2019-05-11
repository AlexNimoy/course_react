import { cartPath } from "~/src/helpers/routes";
import Cart from '~/src/components/pages/Cart';

export default {
  path: cartPath(),
  component: Cart,
  exact: true
}
