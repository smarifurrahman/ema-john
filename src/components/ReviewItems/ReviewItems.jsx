import React from 'react';
import './ReviewItems.css';

const ReviewItems = ({ product }) => {
    const {id, img, name, price, quantity} = product;

    return (
        <div className='review-item'>
            <img src={img} alt="" />
        </div>
    );
};

export default ReviewItems;