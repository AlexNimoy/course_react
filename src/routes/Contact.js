import { contactPath } from "~/src/helpers/routes";
import ContactPage from '~/src/components/pages/ContactPage';

export default {
  path: contactPath(),
  component: ContactPage,
  exact: true
}
