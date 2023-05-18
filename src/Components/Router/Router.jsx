import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Blog from "../Blog/Blog";
import ToyDetail from "../ToyDetail/ToyDetail";
import AllToy from "../AllToy/AllToy";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/toys/:id",
        element: <ToyDetail />,
        loader: (params) => fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "/alltoy",
        element: <AllToy />,
        loader: () => fetch(`http://localhost:5000/toys`),
      },
    ],
  },
]);
export default router;
