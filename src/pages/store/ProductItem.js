import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

const ProductItem = ({product}) => {
    return (
        <Col xs={6} md={4} lg={3} className="product-list">
            <Col xs={12} md={12} className="product-img">
                <img 
                    src={product.image} 
                    alt={product.category} 
                    className="img-fluid prod-img"
                    width="150px"
                    height="150px"
                />
            </Col>
            <Row className="other-product-detail">
                <Col xs={6} md={6}>
                    <h3>{product.category}</h3>
                </Col>
                <Col xs={6} md={6}>
                    <h3><Badge color="success">PRICE:</Badge> ${product.price}</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={6}>
                    {/* <Button className="detail-button">SEE DETAIL</Button> */}
                    <Link to={`/product/${product.id}`}><Button className="detail-button">SEE DETAIL</Button></Link>
                </Col>
                <Col xs={6} md={6}>
                <Button className="cart-button">ADD TO CART</Button>
                </Col>
            </Row>
        </Col>
    )
}

export default ProductItem;