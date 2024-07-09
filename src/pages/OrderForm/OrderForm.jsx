import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './OrderForm.scss'
import { costOfAllProducts } from '../../utils';
<<<<<<< HEAD
import SelectPak from '../../UI/NavBar/SelectPak/SelectPak';
=======
import SelectPak from '../../UI/SelectPak/SelectPak';
>>>>>>> 57cef6eb942ce7dd0c0f99eba09f441d1c3265d8

const OrderForm = () => {
    let [totalCost, setTotalCost] = useState(0);
    let [phoneNumber, setPhoneNumber] = useState('');
    let {cart} = useContext(CartContext)

    useEffect(() =>{
        if(phoneNumber.slice(0, 4) !== '+371'){
            setPhoneNumber('+371')
        }
        if(phoneNumber.length > 12){
            setPhoneNumber(phoneNumber.slice(0, 12))
        }
    }, [phoneNumber])

    useEffect(() =>{
        let cost = costOfAllProducts(cart)
        setTotalCost(cost)
<<<<<<< HEAD
    })
=======
    },[])
>>>>>>> 57cef6eb942ce7dd0c0f99eba09f441d1c3265d8
    
    return(
        <div className='order_form'>
            <div className='order_view'>
                <h2>Your products</h2>
                {cart.map((pr) =>{
                    return(
                        <div key={pr.product.id} className='order_view_item'>
                            <label>{pr.product.title}</label>
                            <label>{pr.amount}</label>
                            <label>{pr.amount * 10}€</label>
                        </div>
                    )
                })}
            </div>
            <h3>Total: {totalCost}€</h3>
            <div className='input_form'>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Введите свой номер телефона'></input>
                <SelectPak/>
            </div>
        </div>
    );
}

export default OrderForm;