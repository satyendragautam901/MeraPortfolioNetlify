import React from "react";

function Experience({ isDarkMode }) {
  return (
    <div
      className={`flex flex-col justify-center mt-12 py-10 items-center mx-auto transition-all duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
      
    >
    {/* flex-col md:flex-col items-center justify-evenly min-h-screen p-8 */}
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>

      <div className="w-9/12 flex flex-col items-center mx-auto px-6 hover:shadow-2xl ">
        <div
          className={`p-6 rounded-lg shadow-lg  inline-block  ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } `}
        >
          {/* Job Title & Duration */}
          <h3 className="text-2xl font-semibold text-blue-500">Vowel</h3>
          <h4 className="text-lg font-medium mt-2">Frontend Developer Intern</h4>
          <p className="text-md text-gray-400 mt-1">August 2024 - Present</p>

          {/* Responsibilities */}
          <ul className="list-disc ml-5 mt-4 space-y-2">
            <li>Collaborate with design teams to create responsive web applications that enhance user experience.</li>
            <li>Implement frontend features using modern frameworks such as React.</li>
            <li>Optimize web applications for maximum speed and scalability.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
