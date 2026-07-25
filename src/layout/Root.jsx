import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Latest_news from "../components/Latest_news";
import Navbar from "../components/Navbar";

const Root = () => {
      return (
            <>
                  <Header />
                  <Latest_news />
                  <Navbar />
                  <section className="w-11/12 mx-auto my-20 grid grid-cols-4 gap-5 items-center">
                        <aside className="bg-base-200"> {/* right side menu / navigation */}
                              <h2 className="text-2xl">All Category</h2>
                        </aside>
                        <section className="col-span-2 bg-base-100">
                              <h2 className="text-2xl">News Home</h2>
                              <Outlet />
                        </section>
                        <aside className="bg-base-200"> {/* left side menu / navigation */}
                              <h2 className="text-2xl">Login With</h2>
                        </aside>
                  </section>
                  <Footer />
            </>
      );
};

export default Root;
