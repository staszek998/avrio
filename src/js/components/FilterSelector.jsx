import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  categoryFilters,
  filterModes,
  sortingTypes
} from '../redux/actionTypes';
import {
  changeCategoryFilter,
  changeNameFilter,
  setFilterMode,
  changeSorting
} from '../redux/actionCreators';

const {
  NONE,
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
const { DISABLED, NAME, CATEGORY, BOTH } = filterModes;

class FilterSelector extends Component {
  buttonApplyClickHandler = event => {
    event.preventDefault();
    if (
      document.querySelector('#filter-name').value !== '' &&
      document.querySelector('#filter-category').value !== NONE
    ) {
      this.props.dispatch(setFilterMode(BOTH));
    } else if (document.querySelector('#filter-name').value !== '') {
      this.props.dispatch(setFilterMode(NAME));
    } else if (document.querySelector('#filter-category').value !== NONE) {
      this.props.dispatch(setFilterMode(CATEGORY));
    } else {
      this.props.dispatch(setFilterMode(DISABLED));
    }
  };

  render() {
    return (
      <form>
        <fieldset>
          <legend>Select your filters</legend>

          <label htmlFor="filter-name">Filter by name: </label>
          <input
            type="text"
            id="filter-name"
            onChange={event => {
              this.props.dispatch(changeNameFilter(event.currentTarget.value));
            }}
          />
          <br />

          <label htmlFor="filter-category">Filter by category: </label>
          <select
            id="filter-category"
            onChange={event => {
              this.props.dispatch(
                changeCategoryFilter(event.currentTarget.value)
              );
            }}
          >
            <option value={NONE}>-</option>
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

          <button
            onClick={event => {
              this.buttonApplyClickHandler(event);
            }}
          >
            Apply
          </button>
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
