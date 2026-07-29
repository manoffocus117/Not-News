import React, { use } from "react";
import { Auth_context } from "./Auth_provider";
import { Navigate } from "react-router";
import Loading from "../components/Loading";

const Private_route = ({ children }) => {
      const { user, loading } = use(Auth_context);
      console.log(user);

      if (loading) {
            return <Loading />;
      }

      if (user && user?.email) {
            return children;
      }
      return <Navigate to="/auth/login" />;
};

export default Private_route;
