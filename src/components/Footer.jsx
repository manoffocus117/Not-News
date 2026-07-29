import React from "react";

const Footer = () => {
      return (
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                  <aside>
                        <p>
                              Copyright © {new Date().getFullYear()} - All right
                              reserved by{" "}
                              <a
                                    href="http://github.com/manoffocus117/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 font-medium"
                              >
                                    MD Saifur Rahman
                              </a>
                        </p>
                  </aside>
            </footer>
      );
};

export default Footer;
