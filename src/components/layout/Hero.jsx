import React from "react";

const Hero = () => {
  return (
    <div className="px-4 py-8 flex flex-col gap-8 max-w-[540px] mx-auto sm:flex-row sm:items-center sm:max-w-none sm:py-24 sm:gap-x-12 md:gap-x-28 xl:max-w-none xl:py-16">
      <img
        src="./hero-mobile.webp"
        alt="mobile hero seciton"
        className="sm:hidden"
      />
      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-semibold sm:text-4xl sm:leading-[3rem] md:text-5xl md:leading-[3.75rem]">
          Trello helps teams move work forward.
        </h1>
        <p className="text-lg mt-4 mb-8 leading-8 font-light md:text-xl md:leading-8">
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is
          unique—accomplish it all with Trello.
        </p>
        <div className="xl:grid xl:grid-cols-[2fr_1fr] xl:my-12">
          <input
            type="email"
            placeholder="Email"
            className="hidden rounded-md sm:block p-3 w-full border border-inherit mt-8 md:w-96 xl:m-0 xl:w-auto"
          />
          <button className="block rounded-md bg-blue-light text-white w-full p-2 my-2 transition-colors duration-150 hover:bg-blue-medium sm:w-fit sm:text-sm sm:px-8 sm:py-4 sm:mt-4 xl:m-0 xl:ml-4">
            Sign up - it's free
          </button>
        </div>

        <a
          href="#"
          className="flex justify-center items-center space-x-2 [&_*]:text-blue-medium sm:justify-start sm:p-2"
        >
          <span className="underline peer">Watch Video</span>
          <svg
            className="peer-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m5 5h14v14h-14z"></path>
            <path
              clipRule="evenodd"
              d="m10.0138 16.3878c-.83597.4912-1.5138.105-1.5138-.8645v-7.04491c0-.97008.6755-1.358 1.5138-.86566l6.465 3.79747c.5548.3261.5589.8517 0 1.1801z"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
            <circle cx="12" cy="12" r="11.5" stroke="currentColor"></circle>
          </svg>
        </a>
      </div>
      <img
        src="./hero.webp"
        alt="hero section"
        className="hidden sm:block w-48 object-contain md:w-72 xl:w-96"
      />
    </div>
  );
};

export default Hero;
