import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductCreator from './components/ProductCreator';
import ProductsList from './components/ProductsList';
import FilterSelector from './components/FilterSelector';

class Main extends Component {
  render() {
    return (
      <div className="main container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <ProductCreator />
              <FilterSelector />
            </div>
          </div>
        </div>
        <ProductsList />
      </div>
    );
  }
}

export default connect()(Main);
