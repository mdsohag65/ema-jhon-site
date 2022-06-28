import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewOrder.css';

const ReviewOrder = (props) => {
    const { product, handleDeleteItem } = props;
    const { name, img, price, quantity, shipping } = product;
    return (
        <section className='review-item flex my-[21px] sm:ml-5 lg:ml-10 sm:w-[450px] lg:w-[570px]'>
            <div>
                <img className='rounded w-[90px] h-[95px]' src={img} alt="" />
            </div>
            <div className='order-info-container'>
                <div className='order-info ml-2'>
                    <h1 title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h1>
                    <p>Price: <span style={{ color: 'orange' }}>${price}</span></p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping: <span style={{ color: 'orangered' }}>${shipping}</span></p>
                </div>
                <div className='delete-btn'>
                    <button
                        onClick={() => handleDeleteItem(product)}
                        className='dlt-icon'><FontAwesomeIcon icon={faTrashAlt
                        }></FontAwesomeIcon></button>
                </div>
            </div>
        </section>
    );
};

export default ReviewOrder;