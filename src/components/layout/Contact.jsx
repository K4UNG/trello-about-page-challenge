import React from "react";

const Contact = () => {
  return (
    <div className="p-4 text-center">
      <div className="contact-gradient rounded-lg px-8 py-4 text-white to-blue-light md:py-8 relative md:bottom-16">
        <h4 className="text-xl leading-9 md:w-3/4 mx-auto">
          Sign up and get started with Trello today. A world of productive
          teamwork awaits
        </h4>
        <form className="md:flex mt-10 gap-x-4 md:max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email"
            className="hidden md:block rounded-md p-3 basis-full"
          />
          <button className="block bg-white rounded-md text-blue-dark w-full p-3 mt-82 text-sm hover:opacity-90 transition-opacity duration-150 md:w-28">
            Sign up
          </button>
        </form>
      </div>

      <div className="md:grid md:grid-cols-[250px_auto_250px] md:gap-x-4">
        <div className="hidden md:block" />
        <p className="mt-12 mb-8 md:m-0 md:text-lg">
          Trello also works great on your smaller screen.
        </p>
        <div className="flex items-center gap-x-16 justify-center md:gap-x-4">
          <a href="#">
            <img
              src="./app-store.svg"
              alt="app store"
              className="w-48 md:w-32"
            />
          </a>
          <a href="#">
            <img
              src="./play-store.svg"
              alt="app store"
              className="w-48 md:w-32"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
