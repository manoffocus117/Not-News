import React, { createContext, useEffect, useState } from "react";
import {
      getAuth,
      createUserWithEmailAndPassword,
      onAuthStateChanged,
      signOut,
      signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./../config/firebase.config";

// create and export a context for authentication
export const Auth_context = createContext();

const auth = getAuth(app);

const Auth_provider = ({ children }) => {
      // state for storing user data
      const [user, set_user] = useState(null);

      const [loading, set_loading] = useState(true);

      // creating a new user using email & password
      const create_user = (email, password) => {
            set_loading(true);
            return createUserWithEmailAndPassword(auth, email, password);
      };

      // login a user
      const login_user = (email, password) => {
            set_loading(true);
            return signInWithEmailAndPassword(auth, email, password);
      };

      // logout current user
      const logout_user = () => {
            return signOut(auth);
      };

      // observer for current user
      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (current_user) => {
                  set_user(current_user);
                  set_loading(false);
            });
            return () => {
                  unsubscribe();
            };
      }, []);

      const auth_data = {
            user,
            set_user,
            create_user,
            login_user,
            logout_user,
            loading,
            set_loading,
      };

      // returning the context as a component
      return <Auth_context value={auth_data}>{children}</Auth_context>;
};

export default Auth_provider;
