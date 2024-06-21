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
        // let liquids = await getAllLiquids();
        // setProducts(liquids)

        setProducts([{id : 1, title: 'Blueberry grape', ml: 30, mg: 20, price: 10, img_flag: 'bg_liquid', type: 'liquid'},
                {id : 2, title: 'Blueberry Bubblegum', ml: 30, mg: 20, price: 10, img_flag: 'bbg_liquid', type: 'liquid'},
                {id : 3, title: 'Pineapple Coconut', ml: 30, mg: 20, price: 10, img_flag: 'pc_liquid', type: 'liquid'},
                {id : 4, title: 'Gummy Bears', ml: 30, mg: 20, price: 10, img_flag: 'gb_liquid', type: 'liquid'},
                {id : 5, title: 'Strawberry Peach Lemon', ml: 30, mg: 20, price: 10, img_flag: 'spl_liquid', type: 'liquid'},
                {id : 6, title: 'Blue Raspberry Lemon', ml: 30, mg: 20, price: 10, img_flag: 'brl_liquid', type: 'liquid'},
                {id : 7, title: 'Strawberry Dragonfruit', ml: 30, mg: 20, price: 10, img_flag: 'sdf_liquid', type: 'liquid'},
                {id : 8, title: 'Raspberry Menthol', ml: 30, mg: 20, price: 10, img_flag: 'rm_liquid', type: 'liquid'},
                {id : 9, title: 'Watermelon Lemon', ml: 30, mg: 20, price: 10, img_flag: 'wl_liquid', type: 'liquid'},
                {id : 10, title: 'Raspberry Watermelon', ml: 30, mg: 20, price: 10, img_flag: 'rw_liquid', type: 'liquid'}])
    }

    useEffect(() =>{
        getLiquids()
    }, [])

    useEffect(() =>{
        if(cart.length !== 0){
            //postPushCartToDb(cart, user?.username)
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