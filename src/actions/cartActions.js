import db from "../firebase";
import {
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_LIST_FAIL,
} from "../constants/cartConstants";
import {
  CART_ITEM_ADD_REQUEST,
  CART_ITEM_ADD_SUCCESS,
  CART_ITEM_ADD_FAIL,
} from "../constants/cartConstants";

export const listCartItems = () => async (dispatch) => {
  const cartData = [];
  try {
    dispatch({ type: CART_LIST_REQUEST });

    db.collection("cartItems").onSnapshot((snapshot) => {
      snapshot.docs.map((cartItem) => {
        cartData.push({
          name: cartItem.data().name,
          price: cartItem.data().price,
          image: cartItem.data().image,
          qty: cartItem.data().qty,
        });
        return cartData;
      });
    });

    dispatch({
      type: CART_LIST_SUCCESS,
      payload: cartData,
    });
  } catch (error) {
    dispatch({
      type: CART_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const saveItemToCart = (cartQty, cartItem) => async (dispatch) => {
  try {
    dispatch({ type: CART_ITEM_ADD_REQUEST });

    db.collection("cartItems").add({
      cartQty: cartQty,
      name: cartItem.name,
      price: cartItem.price,
      image: cartItem.image,
      qty: cartItem.qty,
    });

    dispatch({
      type: CART_ITEM_ADD_SUCCESS,
      payload: {
        cartItem: cartItem,
        cartQty: cartQty,
      },
    });
  } catch (error) {
    dispatch({
      type: CART_ITEM_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
