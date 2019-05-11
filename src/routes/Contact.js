import { contactPath } from "~/src/helpers/routes";
import Contact from '~/src/components/pages/Contact';

export default {
  path: contactPath(),
  component: Contact,
  exact: true
}
