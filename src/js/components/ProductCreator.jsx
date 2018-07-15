import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addProduct } from '../redux/actionCreators';
import { categoryFilters } from '../redux/actionTypes';

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

class ProductCreator extends Component {
  state = {
    nameValue: String,
    categoryValue: BAKERY_AND_BREAD,
    priceValue: Number,
    descriptionValue: String
  };

  submitHandler = event => {
    event.preventDefault();
    let name = this.state.nameValue,
      category = this.state.categoryValue,
      price = this.state.priceValue,
      description = this.state.descriptionValue;
    this.props.dispatch(addProduct(name, category, price, description));
  };

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form action="submit" onSubmit={this.submitHandler}>
                <fieldset>
                  <legend>Add new product</legend>

                  <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      onChange={event => {
                        this.setState({
                          nameValue: event.currentTarget.value
                        });
                      }}
                    />
                  </div>

                  {/* <label htmlFor="photo">Photo: </label>
          <input
            type="file"
            id="photo"
            onChange={event => {
              console.log(event.currentTarget.files);
              this.setState({
                photoValue: event.currentTarget.files[0]
              });
            }}
          />
          <br /> */}

                  <div className="form-group">
                    <label htmlFor="category">Category: </label>
                    <select
                      className="form-control"
                      id="category"
                      onChange={event => {
                        this.setState({
                          categoryValue: event.currentTarget.value
                        });
                      }}
                    >
                      <option value={BAKERY_AND_BREAD}>Bakery and bread</option>
                      <option value={MEAT_AND_SEAFOOD}>Meat and seafood</option>
                      <option value={PASTA_AND_RICE}>Pasta and rice</option>
                      <option
                        value={OILS_SAUCES_SALAD_DRESSINGS_AND_CONDIMENTS}
                      >
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
                    <label htmlFor="price">Price: </label>
                    <input
                      className="form-control"
                      type="number"
                      id="price"
                      onChange={event => {
                        this.setState({
                          priceValue: event.currentTarget.value
                        });
                      }}
                      step="0.01"
                      min="0.01"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input
                      className="form-control"
                      type="text"
                      id="description"
                      onChange={event => {
                        this.setState({
                          descriptionValue: event.currentTarget.value
                        });
                      }}
                    />
                  </div>

                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Add product"
                  />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(ProductCreator);
