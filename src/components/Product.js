import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const addToCartHandler = () => {};

  const [cartQty, setCartQty] = useState(0);
  return (
    <div className="product-item">
      <h5>{product.name}</h5>
      <h6>R{product.price}</h6>
      <img src={product.image} alt={product.name} />
      {product.qty > 0 ? <p>In Stock</p> : <p>No Stock Available</p>}
      {product.qty > 0 && (
        <div>
          <div class="form-control">
            <label for="qty">Qty:</label>
            <input
              type="number"
              name="cartQty"
              onChange={(e) => setCartQty(e.target.value)}
            />
          </div>
        </div>
      )}
      <Link to={"/cart"}>
        <button onClick={addToCartHandler}>Add To Cart</button>
      </Link>
    </div>
  );
};

export default Product;
