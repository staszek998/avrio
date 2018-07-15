import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductCreator from './components/ProductCreator';

class Main extends Component {
  render() {
    return <ProductCreator />;
  }
}

export default connect()(Main);
