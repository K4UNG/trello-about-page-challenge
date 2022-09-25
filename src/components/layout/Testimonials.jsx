import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "BHARATH SUNDAR",
    role: "Finance, eBay",
    industry: "eCommerce",
    text: "Everyone loves it; it has democratized our finance function. In some ways Trello shattered hierarchy and brought us together.",
    image: "./ebay.svg",
  },
  {
    name: "KERRY PARKER-EVANS",
    role: "IT Project Manager, Egencia",
    industry: "Travel",
    text: "Very simple to use, great automation and keeps me on track with all I need to do. I also like that it can be shared with others.",
    image: "./egencia.svg",
  },
  {
    name: "HAYDON DOTSON",
    role: "Sales Manager, Detroit Red Wings",
    industry: "Sport",
    text: "Trello makes it easy to keep everyone on the same page. As changes happen, the real-time updates with email notifications have been key.",
    image: "./detroit-red-wings.svg",
  },
  {
    name: "HALEY ENNES",
    role: "HR Manger,Sprout Social",
    industry: "Marketing",
    text: "Now that we've switched to a remote environment, with the use of Trello, we can now limit the number of meetings we have regarding specific projects and turn to Trello for updates instead.",
    image: "./sprout-social.svg",
  },
];

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    slider.current.slickGoTo(page);
  }, [page]);

  function swipeHandler(dir) {
    if (dir === "left" && page !== data.length - 1) {
      setPage((prev) => prev + 1);
    } else if (dir === "right" && page !== 0) {
      setPage((prev) => prev - 1);
    }
  }

  function nextSlide() {
    if (page === data.length - 1) {
      setPage(0);
      return;
    }
    slider.current.slickNext();
    setPage((prev) => prev + 1);
  }

  function prevSlide() {
    if (page === 0) {
      setPage(data.length - 1);
      return;
    }
    slider.current.slickPrev();
    setPage((prev) => prev - 1);
  }

  return (
    <div className="p-4 py-12 pt-24 md:max-w-2xl md:mx-auto lg:max-w-4xl overflow-x-hidden">
      <div className="hidden md:flex justify-end items:center gap-x-4 mb-8">
        <div className="flex justify-end gap-x-2 items-center">
          {data.map((_, i) => {
            return (
              <button
                key={i}
                className={`${
                  page === i ? "w-12 bg-green-bright" : "w-2"
                } h-2 rounded-full bg-blue-dark duration-200 hover:bg-green-bright`}
                onClick={() => setPage(i)}
              />
            );
          })}
        </div>
        <button
          className="bg-white border-transparent w-8 h-8 font-bold hover:text-green-bright border hover:border-inherit"
          onClick={prevSlide}
        >
          {"<"}
        </button>
        <button
          className="bg-white border-transparent w-8 h-8 font-bold hover:text-green-bright hover:border-inherit border"
          onClick={nextSlide}
        >
          {">"}
        </button>
      </div>

      <Slider
        {...settings}
        className="overflow-y-visible"
        ref={slider}
        onSwipe={swipeHandler}
      >
        {data.map((item) => {
          return (
            <div className="px-4 md:pl-16" key={item.name}>
              <blockquote
                className={`text-lg leading-8 before:content-['"'] before:font-mono before:left-0 before:font-bold before:absolute relative before:text-8xl before:-top-16 before:text-green-bright sm:text-2xl md:text-3xl md:leading-[3rem] before:md:right-full before:md:top-0 before:md:left-[unset]`}
              >
                {item.text}
              </blockquote>
              <div className="md:flex md:justify-between md:my-6">
                <div className="text-sm mt-8 mb-6 md:m-0">
                  <span className="font-bold uppercase">{item.name}</span> -{" "}
                  {item.role}
                </div>
                <div className="text-sm">
                  Industry: <span className="font-bold">{item.industry}</span>
                </div>
                <img
                  src={item.image}
                  alt={item.image.split(".")[0]}
                  className="w-28 mt-8 md:m-0 h-12"
                />
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="flex justify-center gap-x-2 mt-8 md:hidden">
        {data.map((_, i) => {
          return (
            <button
              key={i}
              className={`${
                page === i ? "w-12 bg-green-bright" : "w-2"
              } h-2 rounded-full bg-blue-dark duration-200 hover:bg-green-bright`}
              onClick={() => setPage(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
