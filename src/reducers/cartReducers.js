import {
  CART_ITEM_ADD_REQUEST,
  CART_ITEM_ADD_SUCCESS,
  CART_ITEM_ADD_FAIL,
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_LIST_FAIL,
} from "../constants/cartConstants";

export const listCartItemsReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_LIST_REQUEST:
      return { loading: true, cartItems: [] };

    case CART_LIST_SUCCESS:
      return { loading: false, cartItems: action.payload };

    case CART_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const cartItemAddReducer = (
  state = { cartItem: {}, cartQty: 0 },
  action
) => {
  switch (action.type) {
    case CART_ITEM_ADD_REQUEST:
      return {
        loading: true,
        cartItem: {},
        cartQty: 0,
      };
    case CART_ITEM_ADD_SUCCESS:
      return {
        loading: false,
        cartItem: action.payload.cartItem,
        cartQty: action.payload.cartQty,
      };
    case CART_ITEM_ADD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
