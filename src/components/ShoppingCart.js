import React, {Component} from 'react';
import {Button, Offcanvas, Stack} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";
import CartItem from "./CartItem";
import storeItems from '../data/items.json'

class ShoppingCart extends Component {

    render() {
        return (
            <Offcanvas show={this.props.isOpenCart} onHide={this.props.closeCart} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Stack gap={3}>
                        {this.props.cart.map(item => (
                            <CartItem key={item.product.id} item={item} deleteCartItem={this.props.deleteCartItem} />
                        ))}
                        <div className="ms-auto fw-bold fs-5">
                            Total{" "}
                            {formatCurrency(
                                this.props.cart.reduce((total, cartItem) => {
                                    const prod = storeItems.find(i => i.id === cartItem.product.id)
                                    return total + (prod?.price || 0) * cartItem.quantity
                                }, 0)
                            )}
                        </div>
                        <div className="d-flex justify-content-end">
                            <Button onClick={() =>  {this.props.clearCart(); this.props.closeCart();}} variant="info" size="sm" className="me-2">Purchase</Button>
                            <Button onClick={() => {this.props.clearCart(); this.props.closeCart();}} variant="secondary" size="sm">Clear</Button>
                        </div>
                    </Stack>
                </Offcanvas.Body>
            </Offcanvas>
        );
    }
}

export default ShoppingCart;