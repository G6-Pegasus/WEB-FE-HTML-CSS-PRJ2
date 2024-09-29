import Home from './pages/Home';
import Plp from './pages/Plp';
import Pdp from './pages/Pdp';
import Cart from './pages/Cart';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { DataProvider } from './components/cart/DataContext'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/:category/:subCategory?",
        element: <Plp />,
    },
    {
        path: "/:category/:subCategory/:productId",
        element: <Pdp />,
    },
    {
        path: "/cart",
        element: <Cart />
    }
], /*{ basename: "/WEB-FE-HTML-CSS-PRJ2" } */ );

export default function App() {
    return <DataProvider>
        <RouterProvider router={router} />
    </DataProvider>
}