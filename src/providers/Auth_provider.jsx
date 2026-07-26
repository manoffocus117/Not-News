import React, { createContext, useState } from "react";

// create and export a context for authentication
export const Auth_context = createContext();

const Auth_provider = ({ children }) => {
      const [user, set_user] = useState({
            name: "akkas ali",
            email: "akkas@akkas-ali.com",
      });

      const auth_data = {
            user,
            set_user,
      };

      // returning the context as a component
      return <Auth_context value={auth_data}>{children}</Auth_context>;
};

export default Auth_provider;
