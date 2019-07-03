import React, { Component } from 'react';
import { Router, Switch, Route, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { loadFromLocalStorage } from 'actions/Cart';

import routes from 'routes';

import CartSection from 'components/pages/Cart/widgets/Section';
import Notice from 'components/shared/Notice';
import Layout from 'components/shared/Layout';

import 'css/styles.css';
import 'css/form.css';

const RouteWithSubroutes = (route, index) => (
  <Route {...route} key={index} />
)

const AppRouter = ({ history, children, location, context }) => {
  if(__CLIENT__)
    return(<Router history={ history }>{ children }</Router>);
  if(__SERVER__)
    return(
      <StaticRouter
        location={ location }
        context={ context }
      >
        { children }
      </StaticRouter>
    );
};

const initialState = { notice: '' };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.props.store.dispatch(loadFromLocalStorage());

    this.unlisten = this.props.history.listen( location =>  {
      (location.state) ?
        this.setState({ notice: location.state }) :
        this.setState(initialState)
    });
  }

  render() {
    const { notice } = this.state;
    const { history, location, store, context } = this.props;

    return(
      <Provider store={store}>
        <AppRouter
          history={ history }
          location={ location }
          context={ context }
        >
          <Layout>
            <Notice>{ notice }</Notice>
            <CartSection/>
            <Switch>
              {routes.map((route, index) =>
                RouteWithSubroutes(route, index))
              }
            </Switch>
          </Layout>
        </AppRouter>
      </Provider>
    );
  }
}

export default App;
