import React, {Component} from 'react';
import {Button, Stack} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";

class CartItem extends Component {
    render() {
        const item = this.props.item;
        const quantity = item.quantity;
        const prod = item.product;
        return (
            <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                <img
                    src={prod.image}
                    style={{ width: "100px", height: "75px", objectFit: "cover" }}
                />
                <div className="me-auto">
                    <div>
                        {prod.name}{" "}
                        {quantity > 1 && (
                            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
                        )}
                    </div>
                    <div className="text-muted" style={{ fontSize: ".75rem" }}>
                        {formatCurrency(prod.price)}
                    </div>
                </div>
                <div> {formatCurrency(prod.price * quantity)}</div>
                <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => this.props.deleteCartItem(item)}
                >
                    &times;
                </Button>
            </Stack>
        );
    }
}

export default CartItem;