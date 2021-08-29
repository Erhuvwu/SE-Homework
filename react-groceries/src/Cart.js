import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div>
                <li>{this.props.product.item} {this.props.product.quantity} {this.props.product.units}</li>
            </div>
        );
    }
}

export default Cart;