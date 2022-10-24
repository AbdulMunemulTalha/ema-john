import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from './ReviewItem/ReviewItem';

const Orders = () => {
    const { initialCart } = useLoaderData(); // { products: products, initialCart: initialCart };
    const [cart, setCart] = useState(initialCart);
    // console.log(initialCart)

    const hendleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        // console.log(id, remaining)
        setCart(remaining);
        removeFromDb(id);

    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='order-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        hendleRemoveItem={hendleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No Items For review <Link to='/'>Shop more</Link> </h2>
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Orders;