import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/Products/ProductsAction";
import { Card, Button , Col } from "react-bootstrap";
import { shorten } from "../../helper function/shorten";
const ProductCard = ({ item }) => {
  console.log(item);
  return (

    <Col xs={12} md={6} lg={3}>
    <Card  style={{ width: "15rem" }}>
      <Card.Img variant="top" src={item.image} style={{ width:"15rem",height: "15rem",padding:"1rem" }} />
      <Card.Body>
        <Card.Title>{shorten(item.title)}</Card.Title>
        <Card.Text>{item.price}</Card.Text>
      </Card.Body>
      <div className="buttoncontainer d-flex" >

        <Button variant="primary">+</Button>
        <span>0</span>
        <Button variant="primary">-</Button>
      </div>
    </Card>
    </Col>
  );
};

export default ProductCard;
