import React from "react";
import facebook from "../assets/fb.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Find_us = () => {
      return (
            <div className="mt-10">
                  <h2 className="text-xl mb-5">Find Us On</h2>
                  <div className="">
                        <li
                              className={
                                    "border border-gray-300 p-3 rounded-t flex items-center gap-2 text-md font-medium"
                              }
                        >
                              {" "}
                              <img src={facebook} alt="" className="w-8  bg-base-100 px-2.5 py-1.5 rounded-full" />
                              Facebook
                        </li>
                        <li
                              className={
                                    "border border-gray-300 p-3 flex items-center gap-2 text-md font-medium"
                              }
                        >
                              {" "}
                              <img src={instagram} alt="" className="w-9 bg-base-100 p-2 rounded-full" />
                              Instagram
                        </li>
                        <li
                              className={
                                    "border border-gray-300 p-3 rounded-b flex items-center gap-2 text-md font-medium"
                              }
                        >
                              {" "}
                              <img src={twitter} alt="" className="w-9 bg-base-100 px-1.5 py-2 rounded-full" />
                              Twitter
                        </li>
                  </div>
            </div>
      );
};

export default Find_us;
