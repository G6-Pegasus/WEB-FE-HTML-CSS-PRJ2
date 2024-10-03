import Home from './pages/Home';
import Plp from './pages/Plp';
import Pdp from './pages/pdp';
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
  },
  {
    path: "/Pdp",
    element: <Pdp />
  }
], { basename: "/WEB-FE-HTML-CSS-PRJ2" });

const App = () => <RouterProvider router={router} />

export default App;