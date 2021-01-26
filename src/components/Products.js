import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
};

export default Products;
