import React from "react";

const data = [
  {
    badge: "Choose a new",
    title: "The board is just the beginning",
    text: "Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more.",
    image: "./view.svg",
  },
  {
    badge: "Dive into the details",
    title: "Cards contain everything you need",
    text: "Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more.",
    image: "./card-back.svg",
  },
  {
    badge: "Meet your new butler",
    title: "No-Code automation",
    text: "Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team.",
    image: "./automation.webp",
  },
  {
    badge: "Power-ups",
    title: "Integrate top work tools",
    text: "Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps fine-tune one specific need. With hundreds of Power-Ups available, your team’s workflow wishes are covered.",
    image: "./power-ups.webp",
  },
];

const Learn = () => {
  return (
    <div className="p-4 md:px-12">
      <div className="sm:max-w-md md:max-w-lg">
        <h3 className="font-semibold text-xl sm:text-3xl sm:mb-4 md:leading-10">
          Features to help your team succeed
        </h3>
        <p className="font-light">
          Powering a productive team means using a powerful tool (and plenty of
          snacks). From meetings and projects to events and goal setting,
          Trello’s intuitive features give any team the ability to quickly set
          up and customize workflows for just about anything.
        </p>
      </div>

      {data.map((item) => {
        return (
          <div
            key={item.title}
            className="my-20 md:flex md:gap-x-12 md:odd:flex-row-reverse"
          >
            <img
              src={item.image}
              alt={item.title}
              className="md:w-80 lg:w-96 mb-8 w-4/5 mx-auto"
            />
            <div>
              <span className="uppercase text-sm">{item.badge}</span>
              <h3 className="font-semibold text-xl mt-2 mb-4 md:text-3xl">
                {item.title}
              </h3>
              <p className="font-light leading-7 md:text-lg">{item.text}</p>
              <a href="#" className="font-semibold mt-4 inline-block text-lg">
                <span className="mr-1 md:text-xl">+</span> Learn more
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Learn;
