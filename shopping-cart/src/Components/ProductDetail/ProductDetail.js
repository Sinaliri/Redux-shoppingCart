import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap';
const ProductDetail = () => {
    const location=useLocation();
    const product=location.state;
    console.log(product)
  return (
    <Container>
        <Row>
            <div>
                <h5>{product.title}</h5>
                <img src={product.image}/>
                <p>{product.description}</p>
                <p>rate:{product.rating.rate} from {product.rating.count} vote</p>
                <h4>price: {product.price} $</h4>
            
            </div>
        </Row>
    </Container>
  )
}

export default ProductDetail