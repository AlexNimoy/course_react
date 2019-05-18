import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from '~/src/routes';
import history from '~/src/helpers/history';
import store from '~/src/store';

import CartSection from '~/src/components/pages/Cart/Section';
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
      <Provider store={store}>
        <Router history={ history }>
          <Layout>
            <Notice>{ notice }</Notice>
            <CartSection/>
            <Switch>
              {routes.map((route, index) =>  RouteWithSubroutes(route, index))}
            </Switch>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
