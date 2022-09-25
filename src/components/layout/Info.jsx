import React from "react";

const companies = [
  "coinbase.svg",
  "johnDeere.svg",
  "Grand-Hyatt.svg",
  "Google.svg",
];

const Info = () => {
  return (
    <div className="p-4 py-16 text-center">
      <div>
        <h2 className="text-xl font-semibold lg:text-3xl">
          It’s more than work. It’s a way of working together.
        </h2>
        <p className="font-light text-lg leading-8 my-4 lg:font-light">
          Start with a Trello board, lists, and cards. Customize and expand with
          more features as your teamwork grows. Manage projects, organize tasks,
          and build team spirit—all in one place.
        </p>
        <button className="btn">Start doing</button>
      </div>
      <div className="max-w-[1140px]">
        <img src="./board.webp" alt="board" className="my-8 w-full" />
        <p className="text-lg">
          Join over 2,000,000 teams worldwide that are using Trello to get more
          done.
        </p>
        <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {companies.map((company) => {
            return (
              <img
                src={"./" + company}
                alt={company}
                key={company}
                className="w-40 m-2 sm:mx-auto sm:m-4 md:[&:nth-child(4)]:col-span-3 lg:[&:nth-child(4)]:col-span-1"
              />
            );
          })}
        </div>
        <div className="grid sm:grid-cols-2 md:w-fit md:mx-auto content-center">
          <img
            src="./Visa.svg"
            alt="Visa"
            className="w-40 m-2 sm:mx-auto sm:m-4 md:mx-8"
          />
          <img
            src="./Zoom.webp"
            alt="Zoom"
            className="w-40 m-2 sm:mx-auto sm:m-4 md:mx-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
