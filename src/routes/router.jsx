import { createBrowserRouter } from "react-router";
import Root from "./../layout/Root";
import Home from "../pages/Home";
import Category_news from "../pages/Category_news";

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
            element: <h1>this is authentication page</h1>,
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
