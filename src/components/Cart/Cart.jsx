import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    let quantity = 0;
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        quantity += product.quantity;
        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping;
    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;