import { mainPath } from "../helpers/routes";
import MainPage from "../components/views/Main";

export default {
  path: mainPath(),
  component: MainPage,
  exact: true,
  strict: true
}
