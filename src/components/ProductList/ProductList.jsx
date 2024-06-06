import './ProductList.scss'
import ProductItem from '../ProductItem/ProductItem';
import { useTelegram } from '../../hooks/useTelegram';
import { useEffect, useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { getAllLiquids, postPushCartToDb } from '../../api';
import axios from 'axios';

const ProductList = () => {
    let [products, setProducts] = useState([]);

    const {cart} = useContext(CartContext)

    const {user} = useTelegram()

    let getLiquids = async () =>{
        let liquids = await fetch('http://localhost:8000/getAllLiquids',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) =>{
            return res.json()
        })
        
        setProducts(liquids)
    }

    useEffect(() =>{
        getLiquids()
    }, [])

    useEffect(() =>{
        if(cart.length !== 0){
            postPushCartToDb(cart, user?.username)
        }
    },[cart])
    
    return(
        <div className='product_list'>
            {products?.map((pr) =>{
                return(
                    <ProductItem key={pr?.id} product={pr}/>
                )
            })}
        </div>
    );
}

export default ProductList;