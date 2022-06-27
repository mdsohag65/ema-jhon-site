import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h2 className='text-2xl text-center font-bold'>Your Orders: {products.length}</h2>
            <p className='text-center font-bold'>Cart has: {cart.length}</p>
        </div>
    );
};

export default Orders;