import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductCreator from './components/ProductCreator';
import ProductsList from './components/ProductsList';
import FilterSelector from './components/FilterSelector';
import Modal from './components/Modal';

class Main extends Component {
  render() {
    return (
      <div className="main container py-3">
        <FilterSelector />
        <ProductsList />
        <ProductCreator />
        <Modal />
      </div>
    );
  }
}

export default connect()(Main);
