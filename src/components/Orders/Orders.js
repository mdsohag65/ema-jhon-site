import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewOrder from '../ReviewOrder/ReviewOrder';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleDeleteItem = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
    }
    return (
        <div className='shop-container'>
            <div>
                {
                    cart.map(product => <ReviewOrder
                        key={product.id}
                        product={product}
                        handleDeleteItem={handleDeleteItem}
                    ></ReviewOrder>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Orders;