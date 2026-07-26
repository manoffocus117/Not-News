import React from "react";
import user from "../assets/user.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
      return (
            <nav className="w-11/12 mx-auto py-10 flex items-center justify-between">
                  <menu className="flex items-center gap-10 text-secondary">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/about"}>About</NavLink>
                        <NavLink to={"/career"}>Career</NavLink>
                  </menu>
                  <div className="flex gap-5">
                        <figure>
                              <img src={user} alt="user profile image" />
                        </figure>
                        <Link to={"/auth/login"} className="btn btn-primary px-10 text-base-100">
                              Login
                        </Link>
                  </div>
            </nav>
      );
};

export default Navbar;
