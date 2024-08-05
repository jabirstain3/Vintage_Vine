import { createBrowserRouter } from "react-router-dom";
import HomePage from "../layouts/homePage/HomePage";
import CartPage from "../layouts/cartpage/CartPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element:<HomePage/>,
    },
    {
        path: "/cart",
        element:<CartPage/>,
    },

])

export default Router;