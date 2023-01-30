import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/Products/ProductsAction";
import { useEffect } from "react";
const Store = () => {
  useEffect(() => {
    Dispatch(fetchProducts());
  }, []);
  const Dispatch = useDispatch();
  const StoreProducts = useSelector((state) => state.productsState);

  return (
    <div>
      {StoreProducts.products.map((item) => {
       return <ProductCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Store;
