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
                  <section>
                        <aside></aside> {/* right side menu / navigation */}
                        <section>
                              <Outlet />
                        </section>
                        <aside></aside> {/* left side menu / navigation */}
                  </section>
                  <Footer />
            </>
      );
};

export default Root;
