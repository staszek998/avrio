import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductCreator from './components/ProductCreator';
import ProductsList from './components/ProductsList';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <ProductCreator />
        <ProductsList />
      </div>
    );
  }
}

export default connect()(Main);
