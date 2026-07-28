import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
      return (
            <>
                  <Header />
                  <Navbar />
                  <section className="w-11/12 mx-auto">
                        <h1>This is About page</h1>
                  </section>
                  <Footer />
            </>
      );
};

export default About;
