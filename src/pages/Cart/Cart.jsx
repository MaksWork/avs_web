import { useContext, useEffect, useState } from "react";
import NavBar from "../../UI/NavBar/NavBar";
import CartList from "../../components/CartList/CartList";
import { useTelegram } from "../../hooks/useTelegram";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    let [userCart, setUserCart] = useState([]);

    let {cart} = useContext(CartContext)


    // const {user} = useTelegram();

    // const getUserCart = () =>{
    // }

    useEffect(() =>{
        console.log(cart);
    }, [])
    
    return(
        <>
            <NavBar/>
            <CartList cartProducts={cart}/>
        </>
    );
}

export default Cart;