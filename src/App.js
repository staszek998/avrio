import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combinedReducers from './js/redux/reducers';
import Main from './js/Main';
import './App.css';
import { categoryFilters } from './js/redux/actionTypes';

const { BAKERY_AND_BREAD, PASTA_AND_RICE, DRINKS } = categoryFilters;

const makeId = () => {
  let text = '';
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

const initialState = {
  products: [
    {
      id: makeId(),
      name: 'Bread',
      category: BAKERY_AND_BREAD,
      price: 2.99,
      description: 'Buy one farm bread'
    },
    {
      id: makeId(),
      name: 'Spaghetti pasta',
      category: PASTA_AND_RICE,
      price: 3.29,
      description: `Buy 3 packs of spaghetti pasta for tomorrow's dinner`
    },
    {
      id: makeId(),
      name: 'Coca-Cola',
      category: DRINKS,
      price: 4.79,
      description: 'Buy the whole multi-pack (2 liters each bottle)'
    }
  ]
};

const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
