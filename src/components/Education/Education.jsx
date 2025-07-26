import React from "react";
import AllahabadLogo from "../../assets/Allahabad_University_logo.png";
import GreatLearningLogo from "../../assets/greatLearning.png";
import FreeCodeCampLogo from "../../assets/freecodecamp.svg";

function Education({ isDarkMode }) {
  return (
    <section
      className={`min-h-screen pt-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div
            className={`h-1 w-20 mx-auto ${
              isDarkMode ? "bg-blue-500" : "bg-blue-600"
            }`}
          ></div>
        </div>

        {/* University Details */}
        <div className="flex flex-col lg:flex-row gap-12 mb-24">
          {/* University Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex flex-col items-center">
              <div
                className={`p-2 rounded-full ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <img
                  src={AllahabadLogo}
                  alt="Allahabad University Logo"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mt-6 text-center">
                University Of Allahabad
              </h3>
            </div>
          </div>

          {/* University Details */}
          <div
            className={`flex-1 p-8 rounded-xl shadow-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <p className="text-xl font-medium text-blue-500 mb-2">
              B.Tech in Computer Science
            </p>
            <p
              className={`text-lg mb-6 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              November 2020 - July 2024
            </p>

            <h4 className="text-xl font-semibold mb-4">Relevant Coursework:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span
                  className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 ${
                    isDarkMode ? "bg-blue-400" : "bg-blue-600"
                  }`}
                ></span>
                <span>Operating Systems</span>
              </li>
              <li className="flex items-start">
                <span
                  className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 ${
                    isDarkMode ? "bg-blue-400" : "bg-blue-600"
                  }`}
                ></span>
                <span>Database Management Systems</span>
              </li>
              <li className="flex items-start">
                <span
                  className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 ${
                    isDarkMode ? "bg-blue-400" : "bg-blue-600"
                  }`}
                ></span>
                <span>Object-Oriented Programming</span>
              </li>
              <li className="flex items-start">
                <span
                  className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 ${
                    isDarkMode ? "bg-blue-400" : "bg-blue-600"
                  }`}
                ></span>
                <span>Data Structures & Algorithms</span>
              </li>
              <li className="flex items-start">
                <span
                  className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 ${
                    isDarkMode ? "bg-blue-400" : "bg-blue-600"
                  }`}
                ></span>
                <span>Computer Networks</span>
              </li>
              <li className="flex items-start">
                <span
                  className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 ${
                    isDarkMode ? "bg-blue-400" : "bg-blue-600"
                  }`}
                ></span>
                <span>Software Engineering</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Online Certifications */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-semibold mb-4">
              Online Certifications
            </h3>
            <div
              className={`h-1 w-20 mx-auto ${
                isDarkMode ? "bg-blue-500" : "bg-blue-600"
              }`}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Database Certification */}
            <div
              className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <a
                href="https://drive.google.com/file/d/17kAE-_sUwFVaf0CxidCyoXcIq3Mlzt5i/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="p-6">
                  <div className="flex justify-center mb-6">
                    <img
                      src={GreatLearningLogo}
                      alt="Database Certification"
                      className="h-20 object-contain group-hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-medium mb-2 group-hover:text-blue-500 transition-colors">
                      Introduction to Database and SQL
                    </h4>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Great Learning Academy
                    </p>
                  </div>
                </div>
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-medium bg-black bg-opacity-70 px-4 py-2 rounded-lg">
                    View Certificate
                  </span>
                </div>
              </a>
            </div>

            {/* Web Design Certification */}
            <div
              className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <a
                href="https://www.freecodecamp.org/certification/satyendragautam507/responsive-web-design"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="p-6">
                  <div className="flex justify-center mb-6">
                    <img
                      src={FreeCodeCampLogo}
                      alt="Web Certification"
                      className="h-20 object-contain group-hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-medium mb-2 group-hover:text-blue-500 transition-colors">
                      Responsive Web Design
                    </h4>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      freeCodeCamp
                    </p>
                  </div>
                </div>
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-medium bg-black bg-opacity-70 px-4 py-2 rounded-lg">
                    View Certificate
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
