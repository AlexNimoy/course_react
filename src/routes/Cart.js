import { cartPath } from "~/src/helpers/routes";
import CartContainer from '~/src/containers/CartContainer';

export default {
  path: cartPath(),
  component: CartContainer,
  exact: true
}
