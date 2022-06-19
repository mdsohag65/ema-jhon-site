import React from 'react';

const Cart = ({ cart }) => {

    return (
        <div>
            <h1 className='text-xl text-center my-8 font-semibold'>Order Summery</h1>
            <div className='pl-5'>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Cart;