import React, { useEffect } from 'react';

const CartItem = ({product}) => {
    useEffect(()=>{
        console.log(product);
    })
    
    return(
        <div>Hello world</div>
    );
}

export default CartItem;