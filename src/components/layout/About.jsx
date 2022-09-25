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
    <div>
      {data.map((item) => {
        return (
          <div key={item.title}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default About;
