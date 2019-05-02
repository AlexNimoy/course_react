import React, { Component } from 'react';

import {
  Router,
  Switch, Route, NavLink
} from 'react-router-dom';

import {
  mainPath, contactPath
} from '~/src/helpers/routes';

import routes from '~/src/routes';
import history from '~/src/helpers/history';

import CatalogContainer from '~/src/containers/CatalogContainer';
import CartContainer from '~/src/containers/CartContainer';
import CartButton from '~/src/components/CartButton';
import Notice from '~/src/components/Notice';

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
        <ul>
          <li><NavLink to={ mainPath() }>Main</NavLink></li>
          <li><NavLink to={ contactPath() }>Contact</NavLink></li>
        </ul>
        <CatalogContainer>
          <CartContainer>
            <Notice>{ notice }</Notice>
            <CartButton />
            <Switch>
              {routes.map((route, index) =>  RouteWithSubroutes(route, index))}
            </Switch>
          </CartContainer>
        </CatalogContainer>
      </Router>
    );
  }
}

export default App;
