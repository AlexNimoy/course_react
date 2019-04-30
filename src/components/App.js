import React from 'react';

import {
  BrowserRouter as Router,
  Switch, Route, NavLink
} from 'react-router-dom';

import {
  mainPath, contactPath
} from '~/src/helpers/routes';

import routes from '~/src/routes';

import CatalogContainer from '~/src/containers/CatalogContainer';
import CartContainer from '~/src/containers/CartContainer';
import CartButton from '~/src/components/CartButton';

const RouteWithSubroutes = (route, index) => (
  <Route {...route} key={index} />
)

const App = () => (
  <Router>
    <ul>
      <li><NavLink to={ mainPath() }>Main</NavLink></li>
      <li><NavLink to={ contactPath() }>Contact</NavLink></li>
    </ul>
    <CatalogContainer>
      <CartContainer>
        <CartButton />
        <Switch>
          {routes.map((route, index) =>  RouteWithSubroutes(route, index))}
        </Switch>
      </CartContainer>
    </CatalogContainer>
  </Router>
);

export default App;
