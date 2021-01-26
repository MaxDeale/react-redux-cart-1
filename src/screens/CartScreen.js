import React, { useEffect } from "react";
import CartItem from "../components/CartItem";
import "./cart-style.css";
import { useDispatch, useSelector } from "react-redux";
import { listCartItems } from "../actions/cartActions";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cartItemsFromState = useSelector((state) => state.cartItemsList);
  const { loading, error, cartItems } = cartItemsFromState;

  useEffect(() => {
    dispatch(listCartItems());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <h2>Shopping Cart</h2>

      <div className="cart-container">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
      <Link to="/">
        <button>Back To Products</button>
      </Link>
    </div>
  );
};

export default CartScreen;
