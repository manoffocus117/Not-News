import React from "react";
import user from "../assets/user.png";
import Button from "./Button";

const Navbar = () => {
      return (
            <nav className="w-11/12 mx-auto my-5 flex items-center justify-between">
                  <menu className="flex gap-10 text-secondary">
                        <li>Home</li>
                        <li>About</li>
                        <li>Career</li>
                  </menu>
                  <div className="flex gap-5">
                        <figure>
                              <img src={user} alt="" />
                        </figure>
                        <Button name={"Login"} class_name={"btn btn-primary px-10 text-base-100"} />
                  </div>
            </nav>
      );
};

export default Navbar;
