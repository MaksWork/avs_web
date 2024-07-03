import { useContext, useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";
import './CartList.scss'

const CartList = () => {

    const {cart, setCart} = useContext(CartContext)

    const addToCart = (product_text) =>{

        let userCartList = cart.map((l)=>{  
            return l?.product?.title
        })
        let currentProduct = cart.filter((l) => l.product.title === product_text)
        console.log(currentProduct);
        if(userCartList.includes(product_text)){    
            console.log('test');
            setCart(cart?.map((x) => {
                console.log(x);
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
            setCart([...cart, {currentProduct, amount: 1}])
        }
    }

    const deleteFromCart = (product_text) =>{
        if(cart.length){
            setCart(cart.map((x) =>{
                if(x.product.title === product_text){
                    if(x.amount !== 1){
                        return {product: x?.product, amount: x.amount-1}
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
        <div className="cart_cont">
            {cart?.map((product) => {//TODO напиши здесь колбек и должно работать 
                console.log(product)
                return(
                    <CartItem key={product.product.id} product={product} addToCartCallback={(product_text) => addToCart(product_text)} deleteFromCartCallback={deleteFromCart}/>
                )
            })}
        </div>
    );
}

export default CartList;