import React from "react";
import logo from "../assets/logo.svg";
import { format } from "date-fns";

const Header = () => {
      return (
            <header className="py-5">
                  <div className="flex flex-col items-center justify-center gap-3">
                        <img className="w-80" src={logo} alt="logo" />
                        <p className="text-xl text-secondary">
                              Journalism Without Fear or Favour
                        </p>
                        <p>
                              <span className="font-semibold text-primary">
                                    {format(new Date(), "EEEE, ")}
                              </span>
                              <span className="font-medium text-secondary">
                                    {format(new Date(), "MMMM d, yyyy")}
                              </span>
                        </p>
                  </div>
            </header>
      );
};

export default Header;
