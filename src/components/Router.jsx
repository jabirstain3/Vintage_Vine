import { createBrowserRouter } from "react-router-dom";
import HomePage from "../layouts/homePage/HomePage";
import CartPage from "../layouts/cartpage/CartPage";
import IndoorplantsCtg from "../layouts/homePage/IndoorplantsCtg";
import OutdoorplantsCtg from "../layouts/homePage/OutdoorplantsCtg";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        children: [
            {
                // Default route in nested routes 
                index: true,
                element: <IndoorplantsCtg/>,
            },
            {
                path: "/outdoorPlant",
                element: <OutdoorplantsCtg/>,
            },
            {
                path: "/indoorPlant",
                element: <IndoorplantsCtg/>,
            },
        ],
    },
    {
        path: "/cart",
        element:<CartPage/>,
    },

])

export default Router;