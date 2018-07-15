import React, { Component } from 'react';
import { connect } from 'react-redux';

import { categoryFilters, sortingTypes } from '../redux/actionTypes';
import { changeSorting } from '../redux/actionCreators';

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

const { DEFAULT, ASCENDING, DESCENDING } = sortingTypes;

class FilterSelector extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Select your filters</legend>

          <label htmlFor="filter-name">Filter by name: </label>
          <input type="text" id="filter-name" />
          <br />

          <label htmlFor="filter-category">Filter by category: </label>
          <select id="filter-category">
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
            <option value={DRINKS}>Drinks</option>
          </select>
          <br />

          <button>Apply</button>
          <button>Disable</button>
        </fieldset>

        <fieldset>
          <legend>Sorting</legend>

          <select
            id="sorting"
            onChange={event =>
              this.props.dispatch(changeSorting(event.target.value))
            }
          >
            <option value={DEFAULT}>Default order</option>
            <option value={ASCENDING}>Ascending</option>
            <option value={DESCENDING}>Descending</option>
          </select>
        </fieldset>
      </form>
    );
  }
}

export default connect()(FilterSelector);
