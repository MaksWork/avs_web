import { useContext, useState } from 'react';
import './ProductItem.scss'
import { CartContext } from '../../context/CartContext';

const ProductItem = ({product}) => {    
    const {cart, setCart} = useContext(CartContext)

    const addToCart = (product_text) =>{

        let userCartList = cart.map((l)=>{  
            return l?.product?.title
        })
        if(userCartList.includes(product_text)){    
            setCart(cart?.map((x) => {
                if(x?.product?.title === product_text){
                    return {product: x?.product, amount: x?.amount + 1}
                }
                else{
                    return {product: x?.product, amount: x?.amount}
                }
                        
            }),
            )
        }
        else{
            setCart([...cart, {product, amount: 1}])
        }
    }

    
    return(
        <div className='product_item'>
            <img src={`http://94.231.205.79:8000/static/imgs/${product?.img_flag}.png`}/>
            <label>{product?.title}</label>
            <div>
                {product.ml ? <label>ml : {product?.ml}</label> : <></>}
                {product.mg ? <label>mg : {product?.mg}</label>: <></>}
            </div>
            
            <label>{product?.price}€</label>
            <div>
                <button onClick={() => addToCart(product?.title)}><i className="fa-solid fa-cart-plus"></i></button>
            </div>

        </div>
    );
}

export default ProductItem;