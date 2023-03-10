import axios from "axios";
const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
  };
};

const fetchProductsSuccess = (product) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: product,
  };
};
const fetchProductsFailure = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    payload: error,
  };
};
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios.get("https://api.escuelajs.co/api/v1/products").then((response) => {
      const products = response.data;
      dispatch(fetchProductsSuccess(products))
    }).catch(error => {
      const errorMessage=error.message
      dispatch(fetchProductsFailure(errorMessage))
    })
  };
};
