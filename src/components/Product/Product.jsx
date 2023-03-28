import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, price, seller, ratings, img } = props.product;
    return (
        <div className='product'>
            <div className='card-body'>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <h5>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <div className='card-footer'>

            </div>
        </div>
    );
};

export default Product;