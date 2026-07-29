import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router";

const News_details_card = ({ news }) => {
      const { title, image_url, details, category_id } = news;
      return (
            <div class="card p-5 space-y-7 shadow-sm">
                  <figure>
                        <img
                              src={image_url}
                              alt={title}
                              className="w-full rounded"
                        />
                  </figure>
                  <div class="card-body p-0">
                        <h2 className="card-title text-2xl text-primary">
                              {title}
                        </h2>
                        <p className="text-[18px] text-secondary">{details}</p>
                  </div>
                  <div className="card-action">
                        <Link
                              to={`/category/${category_id}`}
                              className="bg-accent px-5 py-3 text-white flex gap-2 items-center w-fit"
                        >
                              <FiArrowLeft />
                              All news in this category
                        </Link>
                  </div>
            </div>
      );
};

export default News_details_card;
