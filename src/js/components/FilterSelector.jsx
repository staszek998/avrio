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
      <form className="row">
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <fieldset>
                <legend>Select your filters</legend>

                <div className="row">
                  <div className="col-12 d-flex flex-row justify-content-between">
                    <div className="form-group">
                      <label htmlFor="filter-name">Filter by name: </label>
                      <input
                        className="form-control"
                        type="text"
                        id="filter-name"
                        onChange={event => {
                          this.props.dispatch(
                            changeNameFilter(event.currentTarget.value)
                          );
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="filter-category">
                        Filter by category:{' '}
                      </label>
                      <select
                        className="form-control"
                        id="filter-category"
                        onChange={event => {
                          this.props.dispatch(
                            changeCategoryFilter(event.currentTarget.value)
                          );
                        }}
                      >
                        <option value={NONE}>-</option>
                        <option value={BAKERY_AND_BREAD}>
                          Bakery and bread
                        </option>
                        <option value={MEAT_AND_SEAFOOD}>
                          Meat and seafood
                        </option>
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
                  </div>
                </div>

                <div className="btn-group">
                  <button
                    className="btn btn-success"
                    onClick={event => {
                      this.buttonApplyClickHandler(event);
                    }}
                  >
                    Apply
                  </button>
                  <button className="btn btn-warning">Disable</button>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="card h-100">
            <div className="card-body">
              <fieldset>
                <legend>Sorting</legend>

                <label htmlFor="sorting">Select your preferred order:</label>
                <select
                  className="form-control"
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
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default connect()(FilterSelector);
