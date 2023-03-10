import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/Products/ProductsAction";
import { useEffect } from "react";
//bootstrap
import { Container , Row} from "react-bootstrap"

const Store = () => {
  useEffect(() => {
    if(!StoreProducts.products.length){

      Dispatch(fetchProducts());
    }
  }, []);
  const Dispatch = useDispatch();
  const StoreProducts = useSelector((state) => state.productsState);

  return (
    <Container >
      <Row className="d-flex justify-content-around " >
        {
          StoreProducts.loading ? 
          <h2>..loading</h2>:
          StoreProducts.errors ? 
          <p>some thing is wrong</p>:
          StoreProducts.products.map((item) => {
            return <ProductCard item={item} key={item.id} />;
          })}

         
      </Row>
    </Container>
  );
};

export default Store;
