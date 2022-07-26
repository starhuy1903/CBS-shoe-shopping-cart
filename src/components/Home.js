import React, {Component} from 'react';
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import ShoppingCart from "./ShoppingCart";
import storeItems from '../data/items.json'
import {Container} from "react-bootstrap";
import Navbar from "./Navbar";

class Home extends Component {

    products = storeItems;

    state = {
        selectedProduct: null,
        cart: [],
        isOpenCart: false,
        isOpenDetail: false,
    }

    render() {
        return (
            <>
            <Navbar openCart={this.openCart} getCartQuantity={this.getCartQuantity} />
            <Container>
                <h1 className={"display-2"}>Shoes Store</h1>

                <ProductList openDetail={this.openDetail}  handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} getItemQuantity={this.getItemQuantity} prodList={this.products} onSelect={this.selectProduct} addToCart={this.addToCart} deleteCartItem={this.deleteCartItem}/>
                {this.state.selectedProduct && <ProductDetail isOpenDetail={this.state.isOpenDetail} closeDetail={this.closeDetail} selectedProduct={this.state.selectedProduct}/>}
                <ShoppingCart isOpenCart={this.state.isOpenCart} openCart={this.openCart} closeCart={this.closeCart}
                              cart={this.state.cart} deleteCartItem={this.deleteCartItem}
                              clearCart={this.clearCart}/>
            </Container>
            </>
        );
    }

    getCartQuantity = () => {
        return this.state.cart.reduce((total, item) => {
            return total + item.quantity
        }, 0);
    }

    getItemQuantity = (id) => {
        const item = this.state.cart.find(i => i.product.id === id);
        return item?.quantity || 0;
    }

    openCart = () => {
        this.setState({
            isOpenCart: true
        })
    }

    closeCart = () => {
        this.setState({
            isOpenCart: false
        })
    }

    openDetail = (id) => {
        const prod = this.products.find(i => i.id === id);
        this.setState({
            isOpenDetail: true,
            selectedProduct: prod,
        })
    }

    closeDetail = () => {
        this.setState({
            isOpenDetail: false
        })
    }

    addToCart = (prod) => {
        const cloneCart = [...this.state.cart];

        const foundItem = cloneCart.find((item) => item.product.id === prod.id);

        if (foundItem) {
            foundItem.quantity += 1;
        } else {
            cloneCart.push({product: prod, quantity: 1})
        }
        this.setState({
            cart: cloneCart
        })
    }

    deleteCartItem = (id) => {
        const cloneCart = [...this.state.cart];
        const index = cloneCart.findIndex(i => i.product.id === id);
        if (index >= 0) {
            cloneCart.splice(index, 1);
            this.setState({
                cart: cloneCart,
            })
        }
    }

    handleIncrement = (id, maxValue) => {
        let allCartItems = [...this.state.cart];
        const index = allCartItems.findIndex(i => i.product.id === id);
        if (allCartItems[index].quantity < maxValue) {
            allCartItems[index].quantity++;

            this.setState({
                cart: allCartItems,
            })
        }
    }

    handleDecrement = (id, minValue) => {
        let allCartItems = [...this.state.cart];
        const index = allCartItems.findIndex(i => i.product.id === id);
        if (allCartItems[index].quantity > minValue) {
            allCartItems[index].quantity--;

            this.setState({
                cart: allCartItems,
            })
        }
    }

    clearCart = () => {
        this.setState({
                cart: [],
            }
        )
    }
}

export default Home;