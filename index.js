import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch, NavLink
} from 'react-router-dom';

import {
  mainPath, aboutPath, catalogPath
} from './src/helpers/routes';

import '~/src/css/index.css';

import routes from '~/src/routes';

const RouteWithSubroutes = (route, index) => (
  <Route {...route} key={index} />
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li><NavLink exact to={ mainPath() }>Main</NavLink></li>
        <li><NavLink to={ aboutPath() }>About</NavLink></li>
        <li><NavLink to={ catalogPath() }>Catalog</NavLink></li>
      </ul>
      <Switch>
        {routes.map((route, index) =>  RouteWithSubroutes(route, index) ) }
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
