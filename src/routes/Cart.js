import { cartPath } from "~/src/helpers/routes";
import Cart from '~/src/components/Cart';

export default {
  path: cartPath(),
  component: Cart,
  exact: true
}
