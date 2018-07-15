import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  CHANGE_CATEGORY_FILTER,
  CHANGE_NAME_FILTER,
  SET_FILTER_MODE,
  CHANGE_SORTING,
  ADD_COMMENT
} from './actionTypes';

const addProduct = (name, category, price, description) => {
  return {
    type: ADD_PRODUCT,
    name,
    // photo,
    category,
    price,
    description
  };
};

const editProduct = (index, name, category, price, description) => {
  return {
    type: EDIT_PRODUCT,
    index,
    name,
    // photo,
    category,
    price,
    description
  };
};

const deleteProduct = index => {
  return {
    type: DELETE_PRODUCT,
    index
  };
};

const changeCategoryFilter = filter => {
  return {
    type: CHANGE_CATEGORY_FILTER,
    filter
  };
};

const changeNameFilter = filter => {
  return {
    type: CHANGE_NAME_FILTER,
    filter
  };
};

const setFilterMode = mode => {
  return {
    type: SET_FILTER_MODE,
    mode
  };
};

const changeSorting = sorting => {
  return {
    type: CHANGE_SORTING,
    sorting
  };
};

const addComment = (index, comment) => {
  return {
    type: ADD_COMMENT,
    comment
  };
};

export {
  addProduct,
  editProduct,
  deleteProduct,
  changeCategoryFilter,
  changeNameFilter,
  setFilterMode,
  changeSorting,
  addComment
};
