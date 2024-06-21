import { useContext, useEffect, useState } from "react";
import NavBar from "../../UI/NavBar/NavBar";
import CartList from "../../components/CartList/CartList";
//import { useTelegram } from "../../hooks/useTelegram";
import { CartContext } from "../../context/CartContext";
import './Cart.scss'
import { Link, redirect } from "react-router-dom";

const Cart = () => {
    let [userCart, setUserCart] = useState([]);

    let {cart} = useContext(CartContext)

    // const {user} = useTelegram();

    // const getUserCart = () =>{
    // }
    
    return(
        <>
            <NavBar/>
            
            {
                cart.length ? 
                <>
                    <CartList/>
                    <Link to={'/orderForm'} className="order_btn">Order</Link>  
                </>
                :
                 <div className="empty_cart_banner"> {/*//TODO сделай нормальный баннер */}
                    <div>Для начала добавь в свою корзину хотя бы один продукт который видишь на главной витрине(для этого перейди на прошлую страницу)</div>
                </div>
            }    
        </>
    );
}

export default Cart;