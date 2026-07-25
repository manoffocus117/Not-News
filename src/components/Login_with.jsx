import React from "react";
import { ImGithub, ImGoogle } from "react-icons/im";

const Login_with = () => {
      return (
            <div className="flex flex-col gap-5 mt-5">
                  <button className="btn bg-white border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-base-100">
                        <ImGoogle className="text-xl"/> Login with Google
                  </button>
                  <button className="btn btn-outline btn-primary">
                        <ImGithub className="text-xl" /> Login with GitHub
                  </button>
            </div>
      );
};

export default Login_with;
