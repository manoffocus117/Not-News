import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const Category_news = () => {
      const { id } = useParams();
      const news_data = useLoaderData();
      const [category_news, set_category_news] = useState([]);

      useEffect(() => {
            if (id == "0") { // showing all data
                  set_category_news(news_data);
                  return;
            } else if (id == "1") { // filtering todays pick data
                  const filtered_news = news_data.filter(
                        (news) => news.others.is_today_pick == true,
                  );
                  set_category_news(filtered_news);
                  return;
            } else { // filtering data via id
                  const filtered_news = news_data.filter(
                        (news) => news.category_id == id,
                  );
                  set_category_news(filtered_news);
            }
      }, [news_data, id]);
      return <div>Category_news - {category_news.length}</div>;
};

export default Category_news;
