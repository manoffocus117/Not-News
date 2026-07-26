import React from "react";
import { Link } from "react-router";

const Register = () => {
      return (
            <fieldset className="fieldset bg-white border-base-300 rounded-box w-2xl mx-auto border p-24 space-y-5">
                  <h2 className="text-3xl text-primary font-semibold text-center mb-12 pb-12 border-b border-base-200">
                        Register your account
                  </h2>
                  <div className="space-y-3">
                        <label className="label text-xl font-semibold text-primary">
                              Your Name
                        </label>
                        <input
                              type="text"
                              className="input w-full p-7 text-[1rem] border-0 outline-none"
                              placeholder="Enter your name"
                        />
                  </div>
                  <div className="space-y-3">
                        <label className="label text-xl font-semibold text-primary">
                              Photo URL
                        </label>
                        <input
                              type="url"
                              className="input w-full p-7 text-[1rem] border-0 outline-none"
                              placeholder="Enter your Photo URL"
                        />
                  </div>
                  <div className="space-y-3">
                        <label className="label text-xl font-semibold text-primary">
                              Email address
                        </label>
                        <input
                              type="email"
                              className="input w-full p-7 text-[1rem] border-0 outline-none"
                              placeholder="Enter your email address"
                        />
                  </div>

                  <div className="space-y-3">
                        <label className="label text-xl font-semibold text-primary">
                              Password
                        </label>
                        <input
                              type="password"
                              className="input w-full p-7 text-[1rem] border-0 outline-none"
                              placeholder="Enter your password"
                        />
                  </div>
                  <label className="label text-secondary text-[1rem]">
                        <input
                              type="checkbox"
                              defaultChecked
                              className="checkbox"
                              required
                        />
                        Accept Term & Conditions
                  </label>
                  <button className="btn btn-primary text-white mt-4 p-7">
                        Register
                  </button>
                  <p className="text-[1rem]">
                        Already Have An Account ?{" "}
                        <Link to={"/auth/login"} className="text-accent">
                              Login
                        </Link>
                  </p>
            </fieldset>
      );
};

export default Register;
