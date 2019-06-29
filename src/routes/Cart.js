import { cartPath } from "helpers/routes";
import Cart from 'components/pages/Cart/widgets/Cart';

export default {
  path: cartPath(),
  component: Cart,
  exact: true
}
