import React, {Component} from 'react';
import ProductItem from "./ProductItem";
import {Col, Row} from "react-bootstrap";

class ProductList extends Component {

    state = {
        prodList: this.props.prodList
    }

    renderProdList = () => {
        return this.state.prodList.map((item) => {
            return (
                <Col key={item.id}>
                    <ProductItem openDetail={this.props.openDetail} deleteCartItem={this.props.deleteCartItem} handleIncrement={this.props.handleIncrement} handleDecrement={this.props.handleDecrement} getItemQuantity={this.props.getItemQuantity} prod={item} onSelect={this.props.onSelect} addToCart={this.props.addToCart}/>
                </Col>
            )
        })
    }

    render() {
        return (
            <Row md={2} xs={1} lg={3} className="g-3">
                {this.renderProdList()}
            </Row>
        );
    }
}

export default ProductList;