import axios from "axios"

export const postPushCartToDb = async (cart, username) =>{
    try {  
        await axios.post('https://avs-bot-wyzq.onrender.com/addToCart', {cart, username})  
    } catch (error) {
        console.log(error);
    }
    
}

export const getUserCart = async (username) =>{
    try {
        const user_cart = await axios.get('https://avs-bot-wyzq.onrender.com/getUserCart', {username}).then((res) =>{
            return res
        })
        return user_cart
    } catch (error) {
        console.log(error);
    }
}

export const createUserDB = async (user) =>{
    try {
        await axios.post('https://avs-bot-wyzq.onrender.com/createUser', {user})
    } catch (error) {
        console.log(error);
    }
}

export const getAllLiquids = async () =>{
    let liquids = await axios.get('https://94.231.205.79:8000/test').then(({data}) =>{
        return data
    })
    return liquids
}