import React from "react";
import MarqueeText from "react-marquee-text";

const Latest_news = () => {
      return (
            <div className="w-11/12 mx-auto bg-base-100 font-semibold text-primary p-3 flex items-center gap-3">
                  <span className="bg-accent px-5 py-2 text-white shrink-0">
                        Latest
                  </span>
                  <MarqueeText direction="right" pauseOnHover={true}>
                        <p className="mx-5">
                              Match Highlights: Germany vs Spain — as it
                              happened ! Match Highlights: Germany vs Spain
                              as...
                        </p>
                  </MarqueeText>
            </div>
      );
};

export default Latest_news;
