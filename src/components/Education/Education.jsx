import React from "react";
import AllahabadLogo from "../../assets/Allahabad_University_logo.png";
import GreatLearningLogo from "../../assets/greatLearning.png";
import FreeCodeCampLogo from "../../assets/freecodecamp.svg";

function Education({ isDarkMode }) {
  return (
    <section
      className={`flex flex-col md:flex-col items-center justify-evenly mt-20 p-2 transition-all duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-4">Education</h2>

      {/* University Details */}
      <div
        className={`flex flex-col md:flex-row items-center justify-center gap-8 p-6 rounded-lg shadow-lg  ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* University Logo */}
        <div className="flex flex-col items-center">
          <img
            src={AllahabadLogo}
            alt="Allahabad University Logo"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-md"
          />
          <h3 className="text-2xl font-semibold mt-4">
            University Of Allahabad
          </h3>
        </div>

        {/* University Details */}
        <div>
          <p className="text-lg italic">B.Tech in Computer Science</p>
          <p className="text-md text-gray-400">November 2020 - July 2024</p>
          <h4 className="text-xl font-medium mt-4">Relevant Coursework:</h4>
          <ul className="list-disc ml-5 mt-2 space-y-2">
            <li>Operating System</li>
            <li>Database Management Systems</li>
            <li>OOPs</li>
          </ul>
        </div>
      </div>

      {/* Online Certifications */}
      <div className="mt-12">
        <h3 className="text-3xl font-semibold text-center mb-6">
          Online Certifications
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Database Certification */}
          <div className={`relative group  p-4 rounded-lg shadow-lg hover:scale-105 transition ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-black"}`}>
            <a
              href="https://drive.google.com/file/d/17kAE-_sUwFVaf0CxidCyoXcIq3Mlzt5i/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GreatLearningLogo}
                alt="Database Certification"
                className="w-48 h-32 object-cover rounded-md"
              />
              <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                Introduction to Database and SQL
              </span>
            </a>
          </div>

          {/* Web Design Certification */}
          <div className={`relative group  p-4 rounded-lg shadow-lg hover:scale-105 transition ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-black"}`}>
            <a
              href="https://www.freecodecamp.org/certification/satyendragautam507/responsive-web-design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={FreeCodeCampLogo}
                alt="Web Certification"
                className="w-48 h-32 object-cover rounded-md"
              />
              <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                Responsive Web Design
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
