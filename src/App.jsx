import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router/routes'
import { useEffect, useState } from 'react'
import { CartContext } from './context/CartContext'
import { useTelegram } from './hooks/useTelegram'
import { createUserDB } from './api'

function App() {
  const [cart, setCart] = useState([])
  const {user} = useTelegram();
 
  // useEffect(() =>{
  //   createUserDB(user)
  // })


  return (
    <CartContext.Provider value={{cart, setCart}}>
      <RouterProvider router={router}/>
    </CartContext.Provider>
  )
}

export default App
