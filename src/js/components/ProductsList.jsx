import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  categoryFilters,
  filterModes,
  sortingTypes
} from '../redux/actionTypes';
import {
  deleteProduct,
  changeCurrentlyEditedProduct
} from '../redux/actionCreators';

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

  editButtonHandler = (id, oldName, oldCategory, oldPrice, oldDescription) => {
    document.querySelector('#edit-name').value = oldName;
    document.querySelector('#edit-category').value = oldCategory;
    document.querySelector('#edit-price').value = oldPrice;
    document.querySelector('#edit-description').value = oldDescription;
    this.props.changeCurrentlyEditedProduct(id);
  };

  defineOrder = products => {
    switch (this.props.sorting) {
      case ASCENDING:
        return products.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        });
      case DESCENDING:
        return products.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
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
      <div className="row">
        <div className="col-12">
          <h1 className="display-1 mt-5">Products list</h1>

          <div className="products-list">
            <ul className="list-group">
              {this.defineOrder(this.applyFilters()).map((product, index) => {
                return (
                  <li key={index} className="list-group-item card">
                    <div className="card-body">
                      <dl>
                        <div className="row">
                          <div className="col-12 col-md-3">
                            <dt>Name</dt>
                            <dd>{product.name}</dd>
                          </div>
                          <div className="col-12 col-md-3">
                            <dt>Category</dt>
                            <dd>{this.getCategoryString(product.category)}</dd>
                          </div>
                          <div className="col-12 col-md-3">
                            <dt>Price</dt>
                            <dd>{product.price}</dd>
                          </div>
                          <div className="col-12 col-md-3">
                            <dt>Description</dt>
                            <dd>{product.description}</dd>
                          </div>
                        </div>
                      </dl>

                      <div className="row">
                        <div className="col-12">
                          <div className="btn-group">
                            <button
                              className="btn btn-info"
                              data-toggle="modal"
                              data-target="#exampleModal"
                              onClick={() =>
                                this.editButtonHandler(
                                  product.id,
                                  product.name,
                                  product.category,
                                  product.price,
                                  product.description
                                )
                              }
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() =>
                                this.props.deleteProduct(product.id)
                              }
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
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
    deleteProduct: id => {
      dispatch(deleteProduct(id));
    },
    changeCurrentlyEditedProduct: id => {
      dispatch(changeCurrentlyEditedProduct(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
