import React, { use } from "react";
import profile from "../assets/user.png";
import { Link, NavLink } from "react-router";
import { Auth_context } from "../providers/Auth_provider";

const Navbar = () => {
      const { user, logout_user } = use(Auth_context);
      // handle logout
      const handle_logout = () => {
            logout_user()
                  .then(() => {
                        alert("user logged out");
                  })
                  .catch((error) => {
                        const error_code = error.code;
                        const error_message = error.message;
                        alert(error.code, error_message);
                  });
      };
      return (
            <nav className="w-11/12 mx-auto py-10 flex items-center justify-between">
                  <menu className="flex items-center gap-10 text-secondary">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/about"}>About</NavLink>
                        <NavLink to={"/career"}>Career</NavLink>
                  </menu>
                  <div className="flex gap-5 items-center">
                        <figure className="w-12 h-12">
                              <img
                                    src={`${user ? user.photoURL : profile}`}
                                    alt="user profile image"
                                    className="w-full h-full object-cover rounded-full"
                              />
                        </figure>
                        {user ? (
                              <button
                                    onClick={handle_logout}
                                    className="btn btn-primary px-10 text-base-100"
                              >
                                    Log Out
                              </button>
                        ) : (
                              <Link
                                    to={"/auth/login"}
                                    className="btn btn-primary px-10 text-base-100"
                              >
                                    Login
                              </Link>
                        )}
                  </div>
            </nav>
      );
};

export default Navbar;
