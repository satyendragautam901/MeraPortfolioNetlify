import React, { useEffect, useRef } from "react";
import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import Github from "../../assets/Github.svg";

import Typed from "typed.js";

const HeroSectionLeft = ({ isDarkMode }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      console.log("Typed.js is initializing...", typedRef.current);
      const typed = new Typed(typedRef.current, {
        strings: ["Coder", "Software Developer", "Frontend Developer"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-start space-y-6">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <br />
          <span
            className={`${isDarkMode ? "text-green-400" : "text-gray-800"}`}
          >
            Satyendra Gautam
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl mt-2">
          I am a <span ref={typedRef} className="text-green-500"></span>
        </h2>
      </div>

      <div>
        <p
          className={`text-lg max-w-xl ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Welcome to my portfolio website! As a Software Developer, I invite you
          to explore my journey and experience in the world of coding and
          development.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <div className="flex justify-center gap-4 mt-4">
            <a href="mailto:satyendragautam507@gmail.com">
              <img src={gmail} alt="Gmail Icon" className="w-14 h-14" />
            </a>
            <a
              href="https://www.linkedin.com/in/satyendra-gautam-525220244/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="Linkedin Icon" className="w-14 h-14" />
            </a>
            <a
              href="https://github.com/satyendragautam901"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Github}
                alt="Github Icon"
                className="w-14 h-14 bg-white rounded-4xl"
              />
            </a>
          </div>
        </div>

        {/* Hire Me Button */}
        <button
          className={`py-3 px-8 rounded-lg text-md mt-4 font-semibold transition ${
            isDarkMode
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default HeroSectionLeft;
