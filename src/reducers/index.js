import {ADD_ITEM, CLEAR_ITEM_OBJ, CLEAR_ITEMS, DELETE_ITEM, TEXT_CHANGE, TOGGLE_MODAL} from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const item = (action, id) => {
  return {
    name: action.name,
    comment: action.comment,
    price: parseFloat(action.price),
    tax: action.tax.toString(),
    totalItem: parseFloat(action.totalItem),
    id: id
  }
};

const removeItem = (state=[], id) => {
  const items = state.filter( item => item.id !== id);
  return items;
};

const initialState =
  {
    items: [{
      name: 'Product 1',
      comment: 'First Product',
      price: 8.00,
      tax: '20',
      totalItem: 10.22,
      id: 0
    },
      {
        name: 'Product 2',
        comment: 'Second Product',
        price: 12.00,
        tax: '10',
        totalItem: 15.21,
        id: 1
      }
    ],
    itemObj: {
      name: '',
      comment: '',
      price: '',
      tax: '',
      totalItem: ''
    },
    isModalOpen: false
  };

const isModalOpen = (state = initialState.isModalOpen, action) => {
  let status = null;
  switch(action.type) {
    case TOGGLE_MODAL:
      status = !state;
      return status;
    default:
      return state;
  }
};

const itemObj = (state=initialState.itemObj, action) => {
  let itemObj = null;
  switch(action.type) {
    case TEXT_CHANGE:
      itemObj = Object.assign({}, state, action.obj);
      return itemObj;
    case CLEAR_ITEM_OBJ:
      itemObj = Object.assign(state, action.obj);
      return itemObj;
    default:
      return state;
  }
};

const cartItems = (state=initialState.items, action) => {
  let items =null;

  switch(action.type) {
    case ADD_ITEM:
      items = [...state, item(action.item, state.length)];
      return items;
    case DELETE_ITEM:
      items = removeItem(state, action.id);
      return items;
    case CLEAR_ITEMS:
      items = [];
      return items;
    default:
      return state
  }
};

const rootReducer = combineReducers({
  cartItems: cartItems,
  itemObj: itemObj,
  isModalOpen: isModalOpen
});

export default rootReducer;
