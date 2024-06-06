import { useContext, useState } from 'react';
import './ProductItem.scss'
import { CartContext } from '../../context/CartContext';

const ProductItem = ({product}) => {    
    const [howManyInCart, setHowManyInCart] = useState(0)
    const {cart, setCart} = useContext(CartContext)

    const addToCart = (product_text) =>{
        setHowManyInCart(howManyInCart+1)

        let userCartList = cart.map((l)=>{  
            return l?.product?.text
        })
        if(userCartList.includes(product_text)){    
            setCart(cart?.map((x) => {
                if(x?.product?.text === product_text){
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

    const deleteFromCart = (product_text) =>{
        if(howManyInCart){
            setHowManyInCart(howManyInCart-1)
            setCart(cart.map((x) =>{
                if(x.product.text === product_text){
                    if(x.amount !== 1){
                        return {product: x?.product, amount: howManyInCart-1}
                    }
                    else{
                        return 
                    }
                }
                else{
                    return {product: x.product, amount: x.amount}
                }
            }).filter((el) => el !== undefined))
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
                <button onClick={() => deleteFromCart(product.text)}>-</button>
                <label>In cart: {howManyInCart}</label>
                <button onClick={() => addToCart(product?.text)}><i className="fa-solid fa-cart-plus"></i></button>
            </div>

        </div>
    );
}

export default ProductItem;