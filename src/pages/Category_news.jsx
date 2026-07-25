import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import News_card from "../components/News_card";

const Category_news = () => {
      const { id } = useParams(); // string value
      const news_data = useLoaderData(); // loading data from router.jsx using loaded and getting the data using useLoaderData() and stored in a variable

      const [category_news, set_category_news] = useState([]); // state for storing filtered value with a default value of empty array

      useEffect(() => {
            // filtering data when id is 0, showing all the data
            if (id == "0") {
                  set_category_news(news_data);
                  return;
            }
            // filtering data when id is today pick, showing only todays data
            else if (id == "1") {
                  const filtered_news = news_data.filter(
                        (news) => news.others.is_today_pick == true,
                  );
                  set_category_news(filtered_news);
                  return;
            }
            // filtering data when id is equal to a category_id, showing only the category data
            else {
                  const filtered_news = news_data.filter(
                        (news) => news.category_id == id,
                  );
                  set_category_news(filtered_news);
            }
      }, [news_data, id]); // important : don't forget to add all dependencies

      // useEffect(() => {
      //       if (id == "0") { // showing all data
      //             set_category_news(news_data);
      //             return;
      //       } else if (id == "1") { // filtering todays pick data
      //             const filtered_news = news_data.filter(
      //                   (news) => news.others.is_today_pick == true,
      //             );
      //             set_category_news(filtered_news);
      //             return;
      //       } else { // filtering data via id
      //             const filtered_news = news_data.filter(
      //                   (news) => news.category_id == id,
      //             );
      //             set_category_news(filtered_news);
      //       }
      // }, [news_data, id]);

      // console.log(category_news)
      return (
            <>
                  <h2 className="font-semibold">
                        Total{" "}
                        <span className="text-blue-500">
                              {category_news.length}
                        </span>{" "}
                        news found in this category
                  </h2>
                  <div className="grid grid-cols-1 gap-5">
                        {category_news.map((news) => (
                              <News_card key={news.id} news={news} />
                        ))}
                  </div>
            </>
      );
};

export default Category_news;
