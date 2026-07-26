import React from "react";
import { Link } from "react-router";

const Login = () => {
      return (
            <fieldset className="fieldset bg-white border-base-300 rounded-box w-2xl mx-auto border p-24 space-y-5">
                  <h2 className="text-3xl font-semibold text-center mb-12 pb-12 border-b border-base-200">Login your account</h2>
                  <div className="space-y-3">
                        <label className="label text-xl font-semibold">
                              Email address
                        </label>
                        <input
                              type="email"
                              className="input w-full p-7 text-[1rem] border-0 outline-none"
                              placeholder="Enter your email address"
                        />
                  </div>

                  <div className="space-y-3">
                        <label className="label text-xl font-semibold">
                              Password
                        </label>
                        <input
                              type="password"
                              className="input w-full p-7 text-[1rem] border-0 outline-none"
                              placeholder="Enter your password"
                        />
                  </div>
                  <button className="btn btn-primary mt-4">Login</button>
                  <p className="text-[1rem]">
                        Don't Have An Account ?{" "}
                        <Link to={"/auth/register"} className="text-accent">
                              Register
                        </Link>
                  </p>
            </fieldset>
      );
};

export default Login;
