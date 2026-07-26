import { createBrowserRouter } from "react-router";
import Root from "./../layout/Root";
import Home from "../pages/Home";
import Category_news from "../pages/Category_news";
import Auth from "../layout/Auth";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
      {
            path: "/",
            element: <Root />,
            children: [
                  {
                        path: "",
                        element: <Home />,
                  },
                  {
                        path: "/category/:id",
                        element: <Category_news />,
                        loader: () => fetch("/news.json"),
                  },
            ],
      },
      {
            path: "/auth",
            element: <Auth/>,
            children: [
                  {
                        path: "/auth/login",
                        element: <Login />,
                  },
                  {
                        path: "/auth/register",
                        element: <Register />,
                  },
            ],
      },
      {
            path: "/sign-in",
            element: <h1>this is sign-in page</h1>,
      },
      {
            path: "/sign-up",
            element: <h1>this is sign-up page</h1>,
      },
      {
            path: "/*",
            element: <h1>404 page not found</h1>,
      },
]);

export default router;
