import React from "react";

function Experience({ isDarkMode }) {
  return (
    <section
      className={`min-h-screen pt-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <div className={`h-1 w-20 mx-auto ${isDarkMode ? "bg-blue-500" : "bg-blue-600"}`}></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          {/* <div className={`absolute left-4 md:left-1/2 h-full w-0.5 transform -translate-x-1/2 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}></div> */}

          {/* Experience Item */}
          <div className="mb-12 w-full flex justify-start md:justify-center">
            <div className="w-full md:w-1/2 pl-8 md:pl-0 md:pr-8">
              <div className={`p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                isDarkMode ? "bg-gray-800 hover:bg-gray-750" : "bg-white hover:bg-gray-50"
              }`}>
                {/* Company & Duration */}
                <div className="flex items-start mb-4">
                  <div className={`p-2 rounded-full mr-4 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      V
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-500">Vowell</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                      <h4 className="text-xl font-medium">Frontend Developer</h4>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        isDarkMode ? "bg-gray-700 text-blue-400" : "bg-blue-100 text-blue-600"
                      }`}>
                        August 2024 - Present
                      </span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 mt-6">
                  <li className="flex">
                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${isDarkMode ? "bg-blue-400" : "bg-blue-600"}`}></span>
                    <span>Collaborated with design teams to create responsive web applications that enhance user experience</span>
                  </li>
                  <li className="flex">
                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${isDarkMode ? "bg-blue-400" : "bg-blue-600"}`}></span>
                    <span>Implemented frontend features using modern frameworks such as React, Next.js, and Tailwind CSS</span>
                  </li>
                  <li className="flex">
                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${isDarkMode ? "bg-blue-400" : "bg-blue-600"}`}></span>
                    <span>Optimized web applications for maximum speed, accessibility, and scalability</span>
                  </li>
                  <li className="flex">
                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${isDarkMode ? "bg-blue-400" : "bg-blue-600"}`}></span>
                    <span>Participated in code reviews and contributed to maintaining code quality standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Add more experience items here following the same structure */}
          {/* Example for adding another experience:
          <div className="mb-12 w-full flex justify-end md:justify-center">
            <div className="w-full md:w-1/2 pl-8 md:pl-8 md:pr-0">
              [Another experience card]
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}

export default Experience;