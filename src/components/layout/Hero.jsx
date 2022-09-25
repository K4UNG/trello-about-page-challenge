import React from "react";

const Hero = () => {
  return (
    <div className="px-4 py-8">
      <img src="./hero-mobile.webp" alt="mobile hero seciton" />
      <div>
        <h1>Trello helps teams move work forward.</h1>
        <p>
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is
          unique—accomplish it all with Trello.
        </p>
        <div>
          <input type="email" placeholder="Email" />
          <button>Sign up - it's free</button>
        </div>

        <a href="#">
          <span>Watch Video</span>
          <svg
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
    </div>
  );
};

export default Hero;
