import { Link } from 'react-router-dom';
import './NavBar.scss'
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { howManyInCart } from '../../utils';


const NavBar = () => {
    let [navButton, setNavButton] = useState(<></>)
    let [cartNumber, setCartNumber] = useState(0);
    let {cart} = useContext(CartContext)

    const showHideCartDot = () =>{

        if(navButton !== <></>){
            let dot = document.getElementsByClassName('dot_amount')[0]
    
            if(cart.length && dot !== undefined){
                dot.style.display = 'block'
            }
        }
    }

    useEffect(() =>{
        const currentPage = window.location.pathname;

        
        if(cart.length > 0 && currentPage === '/'){
            showHideCartDot()
            }
            
            if(currentPage === '/'){
                setNavButton(<li id='cart_button'><input type='button' value={cartNumber} className='dot_amount'></input><Link to={`/cart`}><i  className="fa-solid fa-cart-shopping"></i></Link></li>)
            }
            else{
                setNavButton(<li id='back_button'><Link to={`/`}><i className="fa-solid fa-arrow-left"></i></Link></li>)
            }
            
            showHideCartDot()
             
    },[])

    useEffect(() =>{
        if(howManyInCart(cart)+1){
            showHideCartDot()
            setCartNumber(howManyInCart(cart)+1)
        }
       
    },[cart])
    
    useEffect(() =>{
        const currentPage = window.location.pathname;

        if(currentPage === '/'){
            setCartNumber(howManyInCart(cart)+1)
            showHideCartDot()
        }   

        if(cart.length > 0 && currentPage === '/'){
            showHideCartDot()
        }
        
        if(currentPage === '/'){
            setNavButton(<li id='cart_button'><input type='button' value={cartNumber} className='dot_amount'></input><Link to={`/cart`}><i  className="fa-solid fa-cart-shopping"></i></Link></li>)
        }
        else{
            setNavButton(<li id='back_button'><Link to={`/`}><i className="fa-solid fa-arrow-left"></i></Link></li>)
        }
    }, [cart])
    
    return(
        <ul className='nav_bar'>
            {navButton}
        </ul>
    );
}

export default NavBar;