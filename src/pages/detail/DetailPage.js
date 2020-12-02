import React from 'react';
import { Link } from 'react-router-dom';
// import { Container, Row, Col, Button } from 'react-bootstrap';

const DetailPage = ({ product }) => {
    
    return (
        <container>
            <div className="Home">
                <div className="lander">
                <p className="detail-title">{product.title}</p>
                <img 
                    src={product.image} 
                    className="img-fluid" 
                    alt={product.category} 
                    width="300px"
                    height="300px"
                    className="detail-img"
                />
                <hr />
                
                <p className="detail-desc">{product.description}</p>
                <div>
                    <p><button className="price">PRICE:</button> ${product.price}</p>
                </div>
                <div>
                    <Link to="/cart"><button className="cart-button-detail">ADD TO CART</button></Link>
                </div>
                </div>
            </div>
        </container>
    )

};

export default DetailPage;

