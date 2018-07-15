import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  categoryFilters,
  filterModes,
  sortingTypes
} from '../redux/actionTypes';
import { deleteProduct, editProduct } from '../redux/actionCreators';

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

const { ASCENDING, DESCENDING } = sortingTypes;

const { NAME, CATEGORY, BOTH } = filterModes;

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

  editButtonHandler = (
    index,
    oldName,
    oldCategory,
    oldPrice,
    oldDescription
  ) => {
    let name = prompt('Enter new product name:', oldName);
    let category = prompt('Enter new product category:', oldCategory);
    let price = prompt('Enter new product price:', oldPrice);
    let description = prompt('Enter new product description:', oldDescription);
    this.props.editProduct(index, name, category, price, description);
  };

  defineOrder = products => {
    switch (this.props.sorting) {
      case ASCENDING:
        return products.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      case DESCENDING:
        return products.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
      default:
        return products;
    }
  };

  applyFilters = () => {
    switch (this.props.filterMode) {
      case NAME:
        return this.filterByName(this.props.products);
      case CATEGORY:
        return this.filterByCategory(this.props.products);
      case BOTH:
        return this.filterByName(this.filterByCategory(this.props.products));
      default:
        return this.props.products;
    }
  };

  filterByName = products => {
    return products.filter(product =>
      product.name.toLowerCase().includes(this.props.nameFilter.toLowerCase())
    );
  };

  filterByCategory = products => {
    return products.filter(
      product => product.category === this.props.categoryFilter
    );
  };

  render() {
    return (
      <div className="products-list">
        <h1>Products list</h1>
        <ul>
          {this.defineOrder(this.applyFilters()).map((product, index) => {
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
                <button
                  onClick={() =>
                    this.editButtonHandler(
                      index,
                      product.name,
                      product.category,
                      product.price,
                      product.description
                    )
                  }
                >
                  Edit
                </button>
                <button onClick={() => this.props.deleteProduct(index)}>
                  Delete
                </button>
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
    products: state.products,
    sorting: state.sorting,
    filterMode: state.filterMode,
    nameFilter: state.nameFilter,
    categoryFilter: state.categoryFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: index => {
      dispatch(deleteProduct(index));
    },
    editProduct: (index, name, category, price, description) => {
      dispatch(editProduct(index, name, category, price, description));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
