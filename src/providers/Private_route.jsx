import React, { use } from "react";
import { Auth_context } from "./Auth_provider";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

const Private_route = ({ children }) => {
      const { user, loading } = use(Auth_context);
      const location = useLocation();
      console.log(location);

      if (loading) {
            return <Loading />;
      }

      if (user && user?.email) {
            return children;
      }
      return <Navigate state={location.pathname} to="/auth/login" />;
};

export default Private_route;
