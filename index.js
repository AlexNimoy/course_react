import _, { flowRight } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

const { get } = _;

const deposit = (value) => ({
  type: 'DEPOSIT',
  value
});

const withdraw = (value) => ({
  type: 'WITHDRAW',
  value
});

const balance = (state = 0, action) => {
  switch(action.type) {
    case 'DEPOSIT':
      return state + get(action, 'value', 0)
    case 'WITHDRAW':
      return state - get(action, 'value', 0)
    default:
      return state;
  }
}

const store = createStore(combineReducers({balance}));

const Deposit = ({ value, deposit, withdraw }) => (
  <Provider store={store}>
    <div>
      <span>Balance: ${value}</span>
      <br/>
      <button onClick={() => deposit(10)}>Deposit $10</button>
      <br />
      <button onClick={() => withdraw(10)}>Withdraw $10</button>
    </div>
  </Provider>
)

const stateToProps = (state) => ({
  value: state.balance
});

const actionsToProps = (dispatch) => ({
  deposit: flowRight(dispatch, deposit),
  withdraw: flowRight(dispatch, withdraw)
})

const DepositContainer = connect(stateToProps, actionsToProps)(Deposit);

export default Deposit;

ReactDOM.render(
  <Provider store={store}>
    <DepositContainer/>
  </Provider>,
  document.getElementById('root')
)
