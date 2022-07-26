import React, {Component} from 'react';
import {Offcanvas} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";

class ProductDetail extends Component {
    render() {
        const {name, image, price, description, quantity} = this.props.selectedProduct;
        return (
            <Offcanvas show={this.props.isOpenDetail} onHide={this.props.closeDetail} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Product Detail</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <img className="w-100" src={image} alt=""/>
                    <p>Name: {name}</p>
                    <p>Price: {formatCurrency(price)}</p>
                    <p>Description: {description}</p>
                    <p>Stock: {quantity}</p>
                </Offcanvas.Body>
            </Offcanvas>
        );
    }
}

export default ProductDetail;