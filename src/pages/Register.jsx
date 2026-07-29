import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Auth_context } from "../providers/Auth_provider";

const Register = () => {
      // creating a user with email & password
      const { create_user, set_user, update_user } = use(Auth_context);

      // navigate to home page
      const navigate = useNavigate();

      // error handling
      const [name_error, set_name_error] = useState("");

      // handle register form
      const handle_register = (event) => {
            // preventing from reload
            event.preventDefault();

            // storing from target
            const form = event.target;

            // storing form input field value
            const name = form.name.value;
            if (name.length < 5) {
                  set_name_error("name should be 5 character");
                  return;
            } else {
                  set_name_error("");
            }
            const photo_url = form.photo_url.value;
            const email = form.email.value;
            const password = form.password.value;

            console.log(name, photo_url, email, password);
            // calling the create_user function
            create_user(email, password)
                  .then((result) => {
                        const user = result.user;
                        update_user({
                              displayName: name,
                              photoURL: photo_url,
                        })
                              .then(() => {
                                    set_user({
                                          ...user,
                                          displayName: name,
                                          photoURL: photo_url,
                                    });
                                    navigate("/");
                              })
                              .catch((error) => {
                                    const error_code = error.code;
                                    const error_message = error.message;
                                    alert(error_code, error_message);
                                    set_user(user);
                              });
                  })
                  .catch((error) => {
                        const error_code = error.code;
                        const error_message = error.message;
                        alert(error_code, error_message);
                  });
      };

      return (
            <form onSubmit={handle_register}>
                  <fieldset className="fieldset bg-white border-base-300 rounded-box w-2xl mx-auto border p-24 space-y-5">
                        <h2 className="text-3xl text-primary font-semibold text-center mb-12 pb-12 border-b border-base-200">
                              Register your account
                        </h2>
                        {/* name field */}
                        <div className="space-y-3">
                              <label className="label text-xl font-semibold text-primary">
                                    Your Name
                              </label>
                              <input
                                    name="name"
                                    type="text"
                                    className="input validator w-full p-7 text-[1rem] border-0 outline-none"
                                    placeholder="Enter your name"
                                    required
                              />
                              {name_error && (
                                    <span className="text-error">
                                          {name_error}
                                    </span>
                              )}
                        </div>
                        {/* photo url field */}
                        <div className="space-y-3">
                              <label className="label text-xl font-semibold text-primary">
                                    Photo URL
                              </label>
                              <input
                                    name="photo_url"
                                    type="url"
                                    className="input validator w-full p-7 text-[1rem] border-0 outline-none"
                                    placeholder="Enter your Photo URL"
                                    required
                              />
                        </div>
                        {/* email address field */}
                        <div className="space-y-3">
                              <label className="label text-xl font-semibold text-primary">
                                    Email address
                              </label>
                              <input
                                    name="email"
                                    type="email"
                                    className="input validator w-full p-7 text-[1rem] border-0 outline-none"
                                    placeholder="Enter your email address"
                                    required
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
                                    minLength="8"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                                    className="input validator w-full p-7 text-[1rem] border-0 outline-none"
                                    placeholder="Enter your password"
                                    required
                              />
                              <p className="validator-hint hidden font-medium">
                                    Must be more than 8 characters, including
                                    <br />
                                    At least one number
                                    <br />
                                    At least one lowercase letter
                                    <br />
                                    At least one uppercase letter
                              </p>
                        </div>
                        {/* terms & condition field */}
                        <label className="label text-secondary text-[1rem]">
                              <input
                                    type="checkbox"
                                    className="checkbox"
                                    required
                              />
                              Accept Term & Conditions
                        </label>
                        {/* submit button */}
                        <button
                              type="submit"
                              className="btn btn-primary text-white mt-4 p-7"
                        >
                              Register
                        </button>
                        {/* login navigation link */}
                        <p className="text-[1rem]">
                              Already Have An Account ?{" "}
                              <Link to={"/auth/login"} className="text-accent">
                                    Login
                              </Link>
                        </p>
                  </fieldset>
            </form>
      );
};

export default Register;
