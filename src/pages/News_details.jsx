import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";
import Login_with from "../components/Login_with";
import Find_us from "../components/Find_us";
import News_details_card from "../components/News_details_card";
import { useLoaderData, useParams } from "react-router";

const News_details = () => {
      const data = useLoaderData();
      const { id } = useParams();
      const [news, set_news] = useState({});

      useEffect(() => {
            const news_derails = data.find(
                  (single_news) => single_news.id == id,
            );
            set_news(news_derails);
      }, [data, id]);

      return (
            <>
                  <Header />
                  <Navbar />
                  <section className="w-11/12 mx-auto my-10 grid grid-cols-12 gap-5">
                        <div className="gap-5 col-span-9">
                              <h1 className="text-[1.25rem] font-medium mb-5">
                                    News Details
                              </h1>
                              <News_details_card news={news} key={news.id} />
                        </div>
                        <aside className="col-span-3">
                              <h2 className="text-[1.25rem] font-medium">
                                    Login With
                              </h2>
                              <Login_with />
                              <Find_us />
                        </aside>
                  </section>
                  <Footer />
            </>
      );
};

export default News_details;
