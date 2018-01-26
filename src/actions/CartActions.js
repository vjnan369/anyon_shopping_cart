import { ADD_ITEM, CLEAR_ITEMS, DELETE_ITEM, TEXT_CHANGE, CLEAR_ITEM_OBJ, TOGGLE_MODAL } from '../constants/ActionTypes';

export const addItem = (item) => {
  const action = {
    type: ADD_ITEM,
    item: {
      name: item.name,
      comment: item.comment,
      price: item.price,
      tax: item.tax,
      totalItem: item.totalItem
    }
  };
  return action;
};

export const deleteItem = (id) => {
  const action = {
    type: DELETE_ITEM,
    id
  };

  return action;
};

export const clearItems = () => {
  const action = {
    type: CLEAR_ITEMS,
  };

  return action;
};

export const handleInputChange = (obj) => {
  const action = {
    type: TEXT_CHANGE,
    obj
  };

  return action;
};

export const clearItemObj = () => {
  const action = {
    type: CLEAR_ITEM_OBJ,
    obj: {
      name: '',
      comment: '',
      price: '',
      tax: '',
      totalItem: ''
    }
  };
  return action;
};

export const toggleModal = () => {
  const action = {
    type: TOGGLE_MODAL
  };
  return action;
};
