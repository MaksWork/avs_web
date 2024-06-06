import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Cart from "../pages/Cart/Cart";

export const router = createBrowserRouter([
    {path: '/', element: <MainPage/>},
    {path: '/cart', element: <Cart/>}
])