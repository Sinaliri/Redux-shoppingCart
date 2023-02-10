import React from "react";
import { Col } from "react-bootstrap";
import { shorten } from "../../helper function/shorten";
import { Link } from "react-router-dom";
//style
import "./ProductCard.scss";
const ProductCard = ({ item }) => {
  console.log(item);
  return (
    <Col xs={12} md={6} lg={3} className="mb-4">
      <div className="Card">
        <div className="imgcontainer">
          <img className="CardImg" src={item.images[0]} alt={item.id} />
          <div className="overlay"></div>
        </div>
        <div className="CardBody" style={{ backgroundColor: "#f7f7f7" }}>
          <p className="CardTitle text-nowrap">{shorten(item.title)}</p>
          <Link to={`/Product/${item.id}`} state={item}>detail</Link>
          <span className="ms-3 mt-2">{item.price} $</span>
          <div className="buttoncontainer d-flex justify-content-around align-items-center">
            <button variant="primary" style={{ width: "40%" }}>
              +
            </button>
            <span className="" style={{ width: "10%", textAlign: "center" }}>
              0
            </span>
            <button variant="primary" style={{ width: "40%" }}>
              -
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
