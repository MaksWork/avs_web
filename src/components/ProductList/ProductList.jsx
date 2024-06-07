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
        let liquids = await axios.get('http//94.231.205.79:8000/test').then(({data}) =>{
            return data
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
            
            {products?.message !== undefined ? products?.map((pr) =>{
                return(
                    <ProductItem key={pr?.id} product={pr}/>
                )
            }) : <label>{products.message}</label>}
        </div>
    );
}

export default ProductList;