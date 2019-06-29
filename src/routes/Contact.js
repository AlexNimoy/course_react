import { contactPath } from "helpers/routes";
import Contact from 'components/pages/Contact';

export default {
  path: contactPath(),
  component: Contact,
  exact: true
}
