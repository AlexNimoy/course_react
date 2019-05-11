import React, { Component } from 'react';

import { Router, Switch, Route } from 'react-router-dom';

import routes from '~/src/routes';
import history from '~/src/helpers/history';

import CatalogContainer from '~/src/containers/CatalogContainer';
import CartContainer from '~/src/containers/CartContainer';
import CartButton from '~/src/components/pages/Cart/Button';
import Notice from '~/src/components/shared/Notice';
import Layout from '~/src/components/shared/Layout';

const RouteWithSubroutes = (route, index) => (
  <Route {...route} key={index} />
)

const initialState = { notice: '' };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.unlisten = history.listen( location =>  {
      (location.state) ?
        this.setState({ notice: location.state }) :
        this.setState(initialState)
    });
  }

  render() {
    const { notice } = this.state;

    return(
      <Router history={ history }>
        <Layout>
          <CatalogContainer>
            <CartContainer>
              <Notice>{ notice }</Notice>
              <CartButton />
              <Switch>
                {routes.map((route, index) =>  RouteWithSubroutes(route, index))}
              </Switch>
            </CartContainer>
          </CatalogContainer>
        </Layout>
      </Router>
    );
  }
}

export default App;
