import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/Products/ProductsAction";

const ProductCard = ({ item }) => {
  console.log(item);
  return (
    <div className="Card">
      <div className="CardImg">
        <img src={item.image} />
      </div>
      <div className="CardBody">
        <h2 className="CardTitle">{item.title}</h2>
        <h5 className="CardPrice">{item.price}</h5>
        <div className="CardButtons">
          <button>+</button>
          <span>0</span>
          <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
