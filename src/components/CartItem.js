import React from "react";

const CartItem = ({ item, cartQty }) => {
  return (
    <div className="cart-item my-5">
      <h3>{item.name}</h3>
      <h4>R{item.price}</h4>
      <img src={item.image} alt={item.name} />
      <h4>Qty In Stock: {item.qty}</h4>
      <h4>
        Qty In Cart: {cartQty} <button>Update</button>{" "}
      </h4>
      <button>Remove</button>
    </div>
  );
};

export default CartItem;
