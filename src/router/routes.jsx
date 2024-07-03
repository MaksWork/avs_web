import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Cart from "../pages/Cart/Cart";
import OrderForm from "../pages/OrderForm/OrderForm";

export const router = createBrowserRouter([
    {path: '/', element: <MainPage/>},
    {path: '/cart', element: <Cart/>},
    {path: '/orderForm', element: <OrderForm/>}
])