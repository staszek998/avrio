import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductCreator from './components/ProductCreator';
import ProductsList from './components/ProductsList';
import FilterSelector from './components/FilterSelector';

class Main extends Component {
  render() {
    return (
      <div className="main container">
        <ProductCreator />
        <FilterSelector />
        <ProductsList />
      </div>
    );
  }
}

export default connect()(Main);
