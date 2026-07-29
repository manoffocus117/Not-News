import { createBrowserRouter } from "react-router";
import Root from "./../layout/Root";
import Home from "../pages/Home";
import Category_news from "../pages/Category_news";
import Auth from "../layout/Auth";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "./../pages/About";
import Career from "../pages/Career";
import News_details from "../pages/News_details";
import Private_route from "../providers/Private_route";

const router = createBrowserRouter([
      {
            path: "/*",
            element: <h1>404 page not found</h1>,
      },
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
            element: <Auth />,
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
            path: "/about",
            element: <About />,
      },
      {
            path: "/career",
            element: <Career />,
      },
      {
            path: "/news-details/:id",
            element: (
                  <Private_route>
                        <News_details />
                  </Private_route>
            ),
            loader: () => fetch("/news.json"),
      },
]);

export default router;
