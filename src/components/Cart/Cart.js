import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h1 className='text-xl text-center my-8 font-semibold'>Order Summery</h1>
            <div className='pl-3'>
                <p className='my-2'>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p className='my-2'>Total Shipping: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5 className='font-semibold my-2'>Grand Total: ${grandTotal.toFixed(2)}</h5>
            </div>
        </div>
    );
};

export default Cart;