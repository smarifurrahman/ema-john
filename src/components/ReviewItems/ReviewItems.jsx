import React from 'react';
import './ReviewItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

const ReviewItems = ({ product, handleRemoveFromCart }) => {
    const { id, img, name, price, quantity } = product;

    return (
        <div className='review-item'>
            <div className='review-details'>
                <img src={img} alt="name" />
                <div>
                    <p className='product-title'>{name}</p>
                    <p>Price: <span className='orange-text'>${price}</span></p>
                    <p>Quantity: <span className='orange-text'>{quantity}</span></p>
                </div>
            </div>
            <button className='btn-delete' onClick={() => handleRemoveFromCart(id)}>
                <FontAwesomeIcon className='delete-icon' icon={faTrashCan} />
            </button>
        </div>
    );
};

export default ReviewItems;