import React, { useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.scss'


const CartItem = ({product, addToCartCallback, deleteFromCartCallback}) => {
    
    return(
        <div className='cart_item_cont'>
            <div>
                <img src={`http://94.231.205.79:8000/static/imgs/${product?.product.img_flag}.png`}></img>
                <label>{product.product.title}</label>
                <label>Amount: {product.amount}</label>
            </div>
            <div className='cart_buttons_cont'>
                <button onClick={() => addToCartCallback(product?.product.title)}><i className="fa-solid fa-cart-plus"></i></button>
                <button onClick={() => deleteFromCartCallback(product?.product.title)}>-</button>
            </div>
        </div>
    );
}

export default CartItem;