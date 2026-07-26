import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { RouterProvider } from "react-router";
import router from "./routes/router.jsx";
import Auth_provider from "./providers/Auth_provider.jsx";

createRoot(document.getElementById("root")).render(
      <StrictMode>
            <Auth_provider>
                  <RouterProvider router={router} />
            </Auth_provider>
      </StrictMode>,
);
