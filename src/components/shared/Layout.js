import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { mainPath, contactPath } from '~/src/helpers/routes';

const Layout = ({ children }) => (
  <Fragment>
    <header>
      <ul>
        <li><NavLink to={ mainPath() }>Main</NavLink></li>
        <li><NavLink to={ contactPath() }>Contact</NavLink></li>
      </ul>
    </header>
    <section className="main">
      { children }
    </section>
  </Fragment>
)

export default Layout;
