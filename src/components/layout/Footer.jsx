import React from "react";
import LogoWhite from "../ui/LogoWhite";

const data = [
  {
    title: "About Trello",
    text: "What's behind the boards.",
  },
  {
    title: "Jobs",
    text: "Learn about open roles on the Trello team.",
  },
  {
    title: "Apps",
    text: "Download the Trello app for you Desktop or Mobile devices.",
  },
  {
    title: "Contact us",
    text: "Need anything? Get in touch and we can help.",
  },
];

const Footer = () => {
  return (
    <div className="text-white py-8 px-4 font-light md:flex md:gap-x-8 md:items:center">
      <div className="flex justify-between items-center md:block">
        <LogoWhite />
        <a href="#" className="hover:underline text-sm">
          Log In
        </a>
      </div>

      <div className="text-sm border-t border-opacity-20 border-white md:grid md:grid-cols-4 md:border-0">
        {data.map((item) => {
          return (
            <a
              href="#"
              key={item.title}
              className="py-4 border-b border-opacity-20 border-white block group md:border-0 md:hover:bg-hover md:p-3 transition-colors duration-100"
            >
              <h5 className="mb-2 group-hover:underline font-normal md:group-hover:no-underline">
                {item.title}
              </h5>
              <div className="text-xs group-hover:underline md:group-hover:no-underline">
                {item.text}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
