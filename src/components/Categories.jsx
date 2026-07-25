import React, { use } from "react";
import { NavLink } from "react-router";

const category_promise = fetch("/categories.json").then((response) =>
      response.json(),
);

const Categories = () => {
      const categories = use(category_promise);
      return (
            <div>
                  <menu className="flex flex-col gap-2 mt-5">
                        {categories.map((category) => (
                              <NavLink
                                    key={category.id}
                                    to={`/category/${category.id}`}
                                    className={
                                          "btn bg-white hover:bg-base-200 border-0 shadow-none font-semibold"
                                    }
                              >
                                    {category.name}
                              </NavLink>
                        ))}
                  </menu>
            </div>
      );
};

export default Categories;
