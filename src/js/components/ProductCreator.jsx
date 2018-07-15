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
  DRINK
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
      <form action="submit" onSubmit={this.submitHandler}>
        <fieldset>
          <legend>Add new product</legend>

          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            onChange={event => {
              this.setState({
                nameValue: event.currentTarget.value
              });
            }}
          />
          <br />

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

          <label htmlFor="category">Category: </label>
          <select
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
            <option value={SNACKS_AND_CRACKERS}>Snacks and crackers</option>
            <option value={PRODUCE}>Produce</option>
            <option value={DRINK}>Drink</option>
          </select>
          <br />

          <label htmlFor="price">Price: </label>
          <input
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
          <br />

          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            onChange={event => {
              this.setState({
                descriptionValue: event.currentTarget.value
              });
            }}
          />
          <br />

          <input type="submit" value="Add product" />
        </fieldset>
      </form>
    );
  }
}

export default connect()(ProductCreator);
