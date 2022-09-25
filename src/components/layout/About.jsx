import React from "react";

const data = [
  {
    title: "See Trello pricing",
    text: "Whether you’re a team of 2 or 2,000, Trello can be customized for your organization. Explore which option is best for you.",
    image: "./tag.svg",
    button: "Compare pricing",
  },
  {
    title: "What is Trello?",
    text: "Trello is the visual tool that empowers your team to manage any type of project, workflow, or task tracking.",
    image: "./compass.svg",
    button: "Tour Trello",
  },
  {
    title: "Discover Trello Enterprise",
    text: "The productivity tool teams love, paired with the features and security needed for scale.",
    image: "./solutions.svg",
    button: "Learn more",
  },
];

const About = () => {
  return (
    <div className="p-4 flex flex-col gap-8 lg:flex-row border-t border-b border-inherit py-16">
      {data.map((item) => {
        return (
          <div
            key={item.title}
            className="lg:flex lg:items-start lg:gap-x-6 flex-1"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-1/5 max-w-[100px] mb-4 lg:w-12 xl:w-16"
            />
            <div>
              <h2 className="font-semibold text-lg lg:text-2xl">
                {item.title}
              </h2>
              <p className="my-4 font-light">{item.text}</p>
              <a href="#" className="btn">
                {item.button}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
