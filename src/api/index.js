import axios from "axios"

export const postPushCartToDb = async (cart, username) =>{
    try {  
        await axios.post('http://localhost:8000/addToCart', {cart, username})  
    } catch (error) {
        console.log(error);
    }
    
}

export const getUserCart = async (username) =>{
    try {
        const user_cart = await axios.get('http://localhost:8000/getUserCart', {username}).then((res) =>{
            return res
        })
        return user_cart
    } catch (error) {
        console.log(error);
    }
}

export const createUserDB = async (user) =>{
    try {
        await axios.post('http://localhost:8000/createUser', {user})
    } catch (error) {
        console.log(error);
    }
}

export const getAllLiquids = async () =>{
    try {
        let liquids = await axios.get('http//94.231.205.79:8000/test').then(({data}) =>{
            return data
        })
        return liquids
    } catch (error) {
        return error
    }
}