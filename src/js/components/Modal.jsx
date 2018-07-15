import React, { Component } from 'react';
import { connect } from 'react-redux';

import { categoryFilters } from '../redux/actionTypes';
import { editProduct } from '../redux/actionCreators';

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

class Modal extends Component {
  saveButtonClickHandler = () => {
    let name = document.querySelector('#edit-name').value;
    let category = document.querySelector('#edit-category').value;
    let price = document.querySelector('#edit-price').value;
    let description = document.querySelector('#edit-description').value;

    this.props.editProduct(
      this.props.currentlyEditedProduct,
      name,
      category,
      price,
      description
    );
  };

  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit the product details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="submit">
                <div className="form-group">
                  <label htmlFor="edit-name">Name: </label>
                  <input className="form-control" type="text" id="edit-name" />
                </div>
                <div className="form-group">
                  <label htmlFor="edit-category">Category: </label>
                  <select className="form-control" id="edit-category">
                    <option value={BAKERY_AND_BREAD}>Bakery and bread</option>
                    <option value={MEAT_AND_SEAFOOD}>Meat and seafood</option>
                    <option value={PASTA_AND_RICE}>Pasta and rice</option>
                    <option value={OILS_SAUCES_SALAD_DRESSINGS_AND_CONDIMENTS}>
                      Oils, sauces, salad dressings and condiments
                    </option>
                    <option value={CEREALS_AND_BREAKFAST_FOODS}>
                      Cereals and breakfast foods
                    </option>
                    <option value={SOUPS_AND_CANNED_GOODS}>
                      Soups and canned goods
                    </option>
                    <option value={FROZEN_FOODS}>Frozen foods</option>
                    <option value={DAIRY_CHEESE_AND_EGGS}>
                      Dairy, cheese and eggs
                    </option>
                    <option value={SNACKS_AND_CRACKERS}>
                      Snacks and crackers
                    </option>
                    <option value={PRODUCE}>Produce</option>
                    <option value={DRINKS}>Drinks</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="edit-price">Price: </label>
                  <input
                    className="form-control"
                    type="number"
                    id="edit-price"
                    step="0.01"
                    min="0.01"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="edit-description">Description: </label>
                  <input
                    className="form-control"
                    type="text"
                    id="edit-description"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.saveButtonClickHandler}
                data-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    currentlyEditedProduct: state.currentlyEditedProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editProduct: (index, name, category, price, description) => {
      dispatch(editProduct(index, name, category, price, description));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
