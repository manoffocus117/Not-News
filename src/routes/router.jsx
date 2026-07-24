import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
      {
            path: "/",
            element: <h1>home page</h1>,
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
