import React from "react";
import { useParams } from "react-router";

const Category_news = () => {
      const {id, name} = useParams();
      console.log(id, name)
      return <div>Category_news - {id}</div>;
};

export default Category_news;
