import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import NewsDetail from "../pages/news/NewsDetail";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/login/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element : <Home />,
        loader : () => fetch('/news.json')
      },
      {
        path : "/login",
        element : <Login />
      },
      {
        path : "/register",
        element : <Register />
      },
      {
        path : "/news/:id",
        element : <PrivateRoute><NewsDetail /></PrivateRoute>,
        loader : () => fetch('/news.json')
      },
    ],
  },
]);

export default router
