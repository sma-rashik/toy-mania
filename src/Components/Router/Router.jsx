import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Blog from "../Blog/Blog";
import ToyDetail from "../ToyDetail/ToyDetail";
import AllToy from "../AllToy/AllToy";
import AddToys from "../AddToys/AddToys";
import MyToysPage from "../MyToysPage/MyToysPage";
import UpdateToy from "../UpdateToy/UpdateToy";
import PrivateRoutes from "./PrivateRoutes";
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
        path: "/addtoys",
        element: (
          <PrivateRoutes>
            <AddToys />
          </PrivateRoutes>
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoutes>
            <MyToysPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/toys/:id",
        element: (
          <PrivateRoutes>
            <ToyDetail />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-assignment-11-server.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "/updatetoy/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(
            `https://toy-assignment-11-server.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "/alltoy",
        element: <AllToy />,
        loader: () => fetch(`https://toy-assignment-11-server.vercel.app/toys`),
      },
    ],
  },
]);
export default router;
