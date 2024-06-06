import { Link } from 'react-router-dom';
import './NavBar.scss'
import { useEffect, useState } from 'react';


const NavBar = () => {
    let [navButton, setNavButton] = useState(<></>)
    
    useEffect(() =>{
        const currentPage = window.location.pathname;
        
        if(currentPage === '/'){
            setNavButton(<li id='cart_button'><Link to={`/cart`}><i  className="fa-solid fa-cart-shopping"></i></Link></li>)
        }
        else{
            setNavButton(<li id='back_button'><Link to={`/`}><i className="fa-solid fa-arrow-left"></i></Link></li>)
        }
    }, [])
    
    return(
        <ul className='nav_bar'>
            {navButton}
        </ul>
    );
}

export default NavBar;