import { combineReducers } from 'redux';
import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  CHANGE_CATEGORY_FILTER,
  CHANGE_NAME_FILTER,
  SET_FILTER_MODE,
  CHANGE_SORTING,
  categoryFilters,
  filterModes,
  sortingTypes,
  CHANGE_CURRENTLY_EDITED_PRODUCT
} from './actionTypes';

const { NONE } = categoryFilters,
  { DEFAULT } = sortingTypes,
  { DISABLED } = filterModes;

const products = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          category: action.category,
          price: action.price,
          description: action.description
        }
      ];
    case EDIT_PRODUCT:
      return state.map(product => {
        if (product.id === action.id) {
          return {
            name: action.name,
            category: action.category,
            price: action.price,
            description: action.description
          };
        } else {
          return product;
        }
      });
    case DELETE_PRODUCT:
      return state.filter(product => {
        return product.id !== action.id;
      });
    default:
      return state;
  }
};

const categoryFilter = (state = NONE, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const nameFilter = (state = '', action) => {
  switch (action.type) {
    case CHANGE_NAME_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const filterMode = (state = DISABLED, action) => {
  switch (action.type) {
    case SET_FILTER_MODE:
      return action.mode;
    default:
      return state;
  }
};

const sorting = (state = DEFAULT, action) => {
  switch (action.type) {
    case CHANGE_SORTING:
      return action.sorting;
    default:
      return state;
  }
};

const currentlyEditedProduct = (state = '', action) => {
  switch (action.type) {
    case CHANGE_CURRENTLY_EDITED_PRODUCT:
      return action.id;
    default:
      return state;
  }
};

const combinedReducers = combineReducers({
  products,
  categoryFilter,
  nameFilter,
  filterMode,
  sorting,
  currentlyEditedProduct
});

export default combinedReducers;
