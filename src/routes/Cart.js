import { cartPath } from "~/src/helpers/routes";
import CartDetails from '~/src/components/CartDetails';

export default {
  path: cartPath(),
  component: CartDetails,
  exact: true
}
