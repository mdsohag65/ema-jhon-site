import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { img, name, price, ratings, seller } = product;
    return (
        <section className='w-[300px] h-[508px] product'>
            <div>
                <div>
                    <img className='w-[286px] h-[286px] rounded-lg	' src={img} alt="" />
                    <div>
                        <h1 className='text-xl font-semibold mt-3'>{name}</h1>
                        <p>Price: ${price}</p>
                        <p className='mt-3'>Manufacturer: {seller}</p>
                        <p>Ratings: {ratings}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className='cart-btn flex justify-center items-center'>
                <p className='mr-2'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </section>
    );
};

export default Product;