import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, hendleRemoveItem }) => {
    const { id, name, price, quantity, img, shipping } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-contaiiner'>
                <div className='review-details'>
                    <p> {name} </p>
                    <p><small>Price:</small> ${price} </p>
                    <p><small>Shipping:</small> ${shipping} </p>
                    <p><small>Quantity:</small> {quantity} </p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => hendleRemoveItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrash} ></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;