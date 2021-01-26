import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";
import db from "../firebase";

export const listProducts = () => async (dispatch) => {
  const productsData = [];
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    db.collection("products").onSnapshot((snapshot) => {
      snapshot.docs.map((product) => {
        productsData.push({
          name: product.data().name,
          price: product.data().price,
          image: product.data().image,
          qty: product.data().qty,
        });
        return productsData;
      });
    });

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: productsData,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
