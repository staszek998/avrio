const ADD_PRODUCT = 'ADD_PRODUCT',
  EDIT_PRODUCT = 'EDIT_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  CHANGE_CATEGORY_FILTER = 'CHANGE_CATEGORY_FILTER',
  CHANGE_NAME_FILTER = 'CHANGE_NAME_FILTER',
  CHANGE_SORTING = 'CHANGE_SORTING',
  ADD_COMMENT = 'ADD_COMMENT';

const categoryFilters = {
  NONE: 'NONE',
  BAKERY_AND_BREAD: 'BAKERY_AND_BREAD',
  MEAT_AND_SEAFOOD: 'MEAT_AND_SEAFOOD',
  PASTA_AND_RICE: 'PASTA_AND_RICE',
  OILS_SAUCES_SALAD_DRESSINGS_AND_CONDIMENTS:
    'OILS_SAUCES_SALAD_DRESSINGS_AND_CONDIMENTS',
  CEREALS_AND_BREAKFAST_FOODS: 'CEREALS_AND_BREAKFAST_FOODS',
  SOUPS_AND_CANNED_GOODS: 'SOUPS_AND_CANNED_GOODS',
  FROZEN_FOODS: 'FROZEN_FOODS',
  DAIRY_CHEESE_AND_EGGS: 'DAIRY_CHEESE_AND_EGGS',
  SNACKS_AND_CRACKERS: 'SNACKS_AND_CRACKERS',
  PRODUCE: 'PRODUCE',
  DRINKS: 'DRINKS'
};

const sortingTypes = {
  NONE: 'NONE',
  ASCENDING: 'ASCENDING',
  DESCENDING: 'DESCENDING'
};

export {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  CHANGE_CATEGORY_FILTER,
  CHANGE_NAME_FILTER,
  CHANGE_SORTING,
  ADD_COMMENT,
  categoryFilters,
  sortingTypes
};
