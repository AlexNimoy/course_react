import { connect } from "react-redux";

import Button from '~/src/components/pages/Cart/Section/Button';

const stateToProps = (state) => ({
  items: state.cart.entries
});

export default connect(stateToProps)(Button);
