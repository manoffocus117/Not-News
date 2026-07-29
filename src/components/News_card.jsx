import React from "react";
import {
      FaBookmark,
      FaShareAlt,
      FaEye,
      FaStar,
      FaRegStar,
} from "react-icons/fa";
import { Link } from "react-router";

const News_card = ({ news }) => {
      const { id, title, author, image_url, details, rating, total_view } =
            news;

      const date = new Date(author.published_date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
      });

      return (
            <div className="rounded bg-base-100 border border-gray-300">
                  {/* Header */}
                  <div className="flex justify-between items-center bg-gray-100 p-5">
                        <div className="flex items-center gap-3">
                              <img
                                    src={author.img}
                                    alt={author.name}
                                    className="w-12 h-12 rounded-full object-cover"
                              />

                              <div>
                                    <h2 className="font-bold">{author.name}</h2>
                                    <p className="text-sm text-gray-500">
                                          {date}
                                    </p>
                              </div>
                        </div>

                        <div className="flex gap-4 text-xl text-gray-500">
                              <FaBookmark className="cursor-pointer hover:text-primary" />
                              <FaShareAlt className="cursor-pointer hover:text-primary" />
                        </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 bg-white">
                        <h2 className="text-2xl font-medium leading-snug mb-5">
                              {title}
                        </h2>

                        <img
                              src={image_url}
                              alt={title}
                              className="w-full h-72 object-cover rounded-lg"
                        />

                        <p className="text-gray-600 mt-5">
                              {details.slice(0, 200)}...
                              <Link
                                    to={`/news-details/${id}`}
                                    className="text-orange-500 font-semibold cursor-pointer ml-1"
                              >
                                    Read More
                              </Link>
                        </p>
                  </div>

                  {/* Footer */}
                  <div className="bg-white border-t border-gray-300 rounded-b px-5 py-4 flex justify-between items-center">
                        <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) =>
                                    i < rating.number ? (
                                          <FaStar
                                                key={i}
                                                className="text-orange-400"
                                          />
                                    ) : (
                                          <FaRegStar
                                                key={i}
                                                className="text-orange-400"
                                          />
                                    ),
                              )}

                              <span className="ml-2 font-semibold">
                                    {rating.number}
                              </span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-500">
                              <FaEye />
                              <span>{total_view}</span>
                        </div>
                  </div>
            </div>
      );
};

export default News_card;
