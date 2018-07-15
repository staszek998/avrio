import React, { Component } from 'react';
import { connect } from 'react-redux';

import { categoryFilters } from '../redux/actionTypes';
import { Object } from 'core-js';

const {
  BAKERY_AND_BREAD,
  MEAT_AND_SEAFOOD,
  PASTA_AND_RICE,
  OILS_SAUCES_SALAD_DRESSINGS_AND_CONDIMENTS,
  CEREALS_AND_BREAKFAST_FOODS,
  SOUPS_AND_CANNED_GOODS,
  FROZEN_FOODS,
  DAIRY_CHEESE_AND_EGGS,
  SNACKS_AND_CRACKERS,
  PRODUCE,
  DRINKS
} = categoryFilters;

class ProductsList extends Component {
  getCategoryString = categoryVariable => {
    switch (categoryVariable) {
      case BAKERY_AND_BREAD:
        return 'Bakery and bread';
      case MEAT_AND_SEAFOOD:
        return 'Meat and seafood';
      case PASTA_AND_RICE:
        return 'Pasta and rice';
      case OILS_SAUCES_SALAD_DRESSINGS_AND_CONDIMENTS:
        return 'oils, sauces, salad dressings and condiments';
      case CEREALS_AND_BREAKFAST_FOODS:
        return 'Cereals and breakfast foods';
      case SOUPS_AND_CANNED_GOODS:
        return 'Soups and canned goods';
      case FROZEN_FOODS:
        return 'Frozen foods';
      case DAIRY_CHEESE_AND_EGGS:
        return 'Dairy, cheese and eggs';
      case SNACKS_AND_CRACKERS:
        return 'Snacks and crackers';
      case PRODUCE:
        return 'Produce';
      case DRINKS:
        return 'Drinks';
      default:
        return '';
    }
  };

  render() {
    return (
      <div className="products-list">
        <h1>Products list</h1>
        <ul>
          {this.props.products.map(product => {
            return (
              <li>
                <dl>
                  <dt>Name</dt>
                  <dd>{product.name}</dd>
                  <dt>Category</dt>
                  <dd>{this.getCategoryString(product.category)}</dd>
                  <dt>Price</dt>
                  <dd>{product.price}</dd>
                  <dt>Description</dt>
                  <dd>{product.description}</dd>
                </dl>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductsList);
