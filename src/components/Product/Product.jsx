import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, price, seller, ratings, img } = props.product;
    return (
        <div className='product'>
            <div className='card-body'>
                <img src={img} alt="" />
                <div className='card-text'>
                    <h4 className='product-name'>{name}</h4>
                    <h5>Price: ${price}</h5>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} Stars</p>
                </div>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;