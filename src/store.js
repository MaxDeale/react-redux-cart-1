import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";
import { listCartItemsReducer } from "./reducers/cartReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  productList: productListReducer,
  cartItemsList: listCartItemsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
