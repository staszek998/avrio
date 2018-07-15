import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  CHANGE_CATEGORY_FILTER,
  CHANGE_NAME_FILTER,
  SET_FILTER_MODE,
  CHANGE_SORTING,
  ADD_COMMENT,
  CHANGE_CURRENTLY_EDITED_PRODUCT
} from './actionTypes';

const addProduct = (id, name, category, price, description) => {
  return {
    type: ADD_PRODUCT,
    id,
    name,
    category,
    price,
    description
  };
};

const editProduct = (id, name, category, price, description) => {
  return {
    type: EDIT_PRODUCT,
    id,
    name,
    category,
    price,
    description
  };
};

const deleteProduct = id => {
  return {
    type: DELETE_PRODUCT,
    id
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

const changeCurrentlyEditedProduct = id => {
  return {
    type: CHANGE_CURRENTLY_EDITED_PRODUCT,
    id
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
  addComment,
  changeCurrentlyEditedProduct
};
