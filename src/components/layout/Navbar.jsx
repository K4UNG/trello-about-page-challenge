import React, { useState, useEffect } from "react";
import Logo from "../ui/Logo";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(
    document.documentElement.scrollTop !== 0
  );
  const links = ["Features", "Solutions", "Plans", "Pricing", "Resources"];

  function toggleMenu() {
    setMenu((prev) => {
      if (prev) {
        document.body.classList.remove("overflow-hidden");
      } else {
        document.body.classList.add("overflow-hidden");
      }
      return !prev;
    });
  }

  useEffect(() => {
    function scrollHandler() {
      const progress = document.documentElement.scrollTop;
      if (progress === 0) {
        setScroll(false);
      } else if (progress > 0 && !scroll) {
        setScroll(true);
      }
    }
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={`md:hover:shadow-xl transition-[box-shadow] bg-white ${
        scroll ? "shadow-xl" : "shadow-md"
      }`}
    >
      <div className="relative md:flex justify-between">
        <div className="p-3 flex justify-between items-center">
          <a
            href="/"
            className="text-2xl inline-block font-bold md:text-3xl py-2"
          >
            <Logo />
          </a>
          <ul className="hidden md:flex">
            {links.map((link) => (
              <li key={link} className="ml-12">
                <a
                  href={"#" + link}
                  className="text-blue-dull text-sm hover:text-blue-medium"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="w-7 h-5 relative md:hidden [&_*]:duration-150"
            onClick={toggleMenu}
          >
            <span
              className={`w-full absolute h-[3px] bg-black rounded-full left-0 top-0 origin-left ${
                menu ? "rotate-45" : "rotate-0"
              }`}
            />
            <span
              className={`absolute w-full h-[3px] bg-black rounded-full left-0 top-1/2 -translate-y-1/2 ${
                menu ? "scale-x-0 opacity-0" : "opacity-100 scale-x-100"
              } origin-center`}
            />
            <span
              className={`w-full absolute h-[3px] bg-black rounded-full left-0 bottom-0 origin-left ${
                menu ? "-rotate-45 translate-y-[3px]" : "rotate-0"
              }`}
            />
          </button>
        </div>

        <div className="hidden md:flex">
          <button className="px-6">Log in</button>
          <button className="bg-blue-light px-6 text-white hover:bg-blue-medium">
            Get Trello for free
          </button>
        </div>

        <div
          className={`absolute inset-x-0 top-full bg-white overflow-hidden ${
            menu ? "h-screen" : "h-0"
          } duration-500 ease-in-out transition-[height] md:hidden`}
        >
          <div className="p-3 w-full top-0 inset-x-0 min-h-screen absolute">
            <ul>
              {links.map((link) => {
                return (
                  <li key={link} className="border-t border-slate-200">
                    <a className="my-4 inline-block" href={"#" + link}>
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
            <button className="block text-center p-4 w-full my-2 text-white bg-blue-light">
              Get Trello for free
            </button>
            <button className="block text-center p-4 w-full my-2 border border-blue-light">
              Log in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
