import React, { use } from "react";
import profile from "../assets/user.png";
import { Link, NavLink } from "react-router";
import { Auth_context } from "../providers/Auth_provider";

const Navbar = () => {
      const { user } = use(Auth_context);
      return (
            <nav className="w-11/12 mx-auto py-10 flex items-center justify-between">
                  <menu className="flex items-center gap-10 text-secondary">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/about"}>About</NavLink>
                        <NavLink to={"/career"}>Career</NavLink>
                  </menu>
                  <div className="flex gap-5">
                        <figure>
                              <img src={profile} alt="user profile image" />
                        </figure>
                        <Link
                              to={"/auth/login"}
                              className="btn btn-primary px-10 text-base-100"
                        >
                              Login
                        </Link>
                        <span>{user && user.email}</span>
                  </div>
            </nav>
      );
};

export default Navbar;
