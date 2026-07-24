import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
      return (
            <header className="py-5">
                  <div className="flex flex-col items-center justify-center gap-3">
                        <img className="w-80" src={logo} alt="" srcset="" />
                        <p className="text-xl text-gray-400">Journalism Without Fear or Favour</p>
                  </div>
            </header>
      );
};

export default Header;
