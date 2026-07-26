import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Auth = () => {
      return (
            <main className="bg-base-100">
                  <Navbar />
                  <section className="w-11/12 mx-auto py-5">
                        <Outlet />
                  </section>
                  <Footer />
            </main>
      );
};

export default Auth;
