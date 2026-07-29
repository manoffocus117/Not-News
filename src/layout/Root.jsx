import React, { Suspense } from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Latest_news from "../components/Latest_news";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Login_with from "../components/Login_with";
import Find_us from "../components/Find_us";
import Loading from "../components/Loading";

const Root = () => {
      const { state } = useNavigation();

      return (
            <>
                  <Header />
                  <Latest_news />
                  <Navbar />
                  <section className="w-11/12 mx-auto my-10 grid grid-cols-4 gap-5">
                        <aside className="sticky top-5 h-fit">
                              {" "}
                              {/* right side menu / navigation */}
                              <h2 className="text-2xl">All Category</h2>
                              <Suspense
                                    fallback={
                                          <span className="loading loading-spinner loading-xl"></span>
                                    }
                              >
                                    <Categories />
                              </Suspense>
                        </aside>
                        <section className="col-span-2">
                              {/* main content */}
                              {state == "loading" ? <Loading /> : <Outlet />}
                        </section>
                        <aside className="sticky top-5 h-fit">
                              {" "}
                              {/* left side menu / navigation */}
                              <h2 className="text-2xl">Login With</h2>
                              <Login_with />
                              <Find_us />
                        </aside>
                  </section>
                  <Footer />
            </>
      );
};

export default Root;
