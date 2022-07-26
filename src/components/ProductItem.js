import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";

class ProductItem extends Component {

    render() {
        const {id, name, price, image} = this.props.prod;
        const quantity = this.props.getItemQuantity(id);
        return (
            <Card className="h-100">
                <Card.Img
                    variant="top"
                    src={image}
                    height="200px"
                    style={{objectFit: "cover", cursor: "pointer"}}
                    onClick={() => this.props.openDetail(id)}
                />

                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-5">{name}</span>
                        <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                    </Card.Title>
                    <div className="mt-auto">
                        {quantity === 0 ? (
                            <Button className="w-100" onClick={() => this.props.addToCart(this.props.prod)}>
                                + Add to cart
                            </Button>
                        ) : (<div
                            className="d-flex align-items-center flex-column"
                            style={{gap: ".5rem"}}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{gap: ".5rem"}}
                            >
                                <Button onClick={() => this.props.handleDecrement(id, 1)}>-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> in cart
                                </div>
                                <Button onClick={() => this.props.handleIncrement(id, 100)}>+</Button>
                            </div>
                            <Button
                                onClick={() => this.props.deleteCartItem(id)}
                                variant="danger"
                                size="sm"
                            >
                                Remove
                            </Button>
                        </div>)}
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default ProductItem;