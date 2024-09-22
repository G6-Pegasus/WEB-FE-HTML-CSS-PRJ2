import Home from './pages/Home'
import Plp from './pages/Plp'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:category/:subCategory?",
    element: <Plp />,
  }
], { basename: "/WEB-FE-HTML-CSS-PRJ2" });

const App = () => <RouterProvider router={router} />

export default App
