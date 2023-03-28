import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, price, seller, ratings, img } = props.product;
    const handleAddToCart = props.handleAddToCart;

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
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <span>Add to Cart</span>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;