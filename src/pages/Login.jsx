import React, { use } from "react";
import { Link } from "react-router";
import { Auth_context } from "../providers/Auth_provider";

const Login = () => {
      // login user
      const { login_user, set_user } = use(Auth_context);
      // handle login
      const handle_login = (event) => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;

            login_user(email, password)
                  .then((result) => {
                        const user = result.user;
                        set_user(user);
                  })
                  .catch((error) => {
                        const error_code = error.code;
                        const error_message = error.message;
                        alert(error_code, error_message);
                  });
      };
      return (
            <form onSubmit={handle_login}>
                  <fieldset className="fieldset bg-white border-base-300 rounded-box w-2xl mx-auto border p-24 space-y-5">
                        <h2 className="text-3xl font-semibold text-primary text-center mb-12 pb-12 border-b border-base-200">
                              Login your account
                        </h2>
                        {/* email field */}
                        <div className="space-y-3">
                              <label className="label text-xl font-semibold text-primary">
                                    Email address
                              </label>
                              <input
                                    name="email"
                                    type="email"
                                    className="input w-full p-7 text-[1rem] border-0 outline-none"
                                    placeholder="Enter your email address"
                              />
                        </div>
                        {/* password field */}
                        <div className="space-y-3">
                              <label className="label text-xl font-semibold text-primary">
                                    Password
                              </label>
                              <input
                                    name="password"
                                    type="password"
                                    className="input w-full p-7 text-[1rem] border-0 outline-none"
                                    placeholder="Enter your password"
                              />
                        </div>
                        {/* forget password */}
                        <a className="link link-hover text-[1rem] text-primary font-medium -mt-4">
                              Forgot password?
                        </a>
                        {/* submit button */}
                        <button
                              type="submit"
                              className="btn btn-primary text-white mt-4 p-7"
                        >
                              Login
                        </button>
                        {/* navigate to register page */}
                        <p className="text-[1rem]">
                              Don't Have An Account ?{" "}
                              <Link
                                    to={"/auth/register"}
                                    className="text-accent"
                              >
                                    Register
                              </Link>
                        </p>
                  </fieldset>
            </form>
      );
};

export default Login;
