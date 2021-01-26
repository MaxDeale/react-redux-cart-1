import React, { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Products from "../components/Products";
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <h1>Available Products</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Products products={products} />
      )}
    </div>
  );
};

export default HomeScreen;
