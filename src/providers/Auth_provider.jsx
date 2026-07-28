import React, { createContext, useEffect, useState } from "react";
import {
      getAuth,
      createUserWithEmailAndPassword,
      onAuthStateChanged,
      signOut,
} from "firebase/auth";
import app from "./../config/firebase.config";

// create and export a context for authentication
export const Auth_context = createContext();

const auth = getAuth(app);

const Auth_provider = ({ children }) => {
      // state for storing user data
      const [user, set_user] = useState(null);
      console.log(user);

      // creating a new user using email & password
      const create_user = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password);
      };

      // logout current user
      const logout_user = () => {
            return signOut(auth);
      };

      // observer for current user
      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (current_user) => {
                  set_user(current_user);
            });
            return () => {
                  unsubscribe();
            };
      }, []);

      const auth_data = {
            user,
            set_user,
            create_user,
            logout_user,
      };

      // returning the context as a component
      return <Auth_context value={auth_data}>{children}</Auth_context>;
};

export default Auth_provider;
