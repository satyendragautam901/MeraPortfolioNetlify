import React from "react";

function AboutSectionRight({ isDarkMode }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg leading-relaxed mb-4">
        Focused and enthusiastic web developer with a passion for creating
        user-friendly and efficient applications. I thrive on understanding the
        intricacies of web technologies and apply them effectively in various
        projects. My experience includes working with HTML, CSS, JavaScript, and
        frameworks like React. I’m dedicated to building responsive and engaging
        websites that solve real-world problems and enhance user experiences.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">What I Enjoy Doing</h3>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="text-green-400 mr-2">➡</span> Building personal
          projects
        </li>
        <li className="flex items-center">
          <span className="text-green-400 mr-2">➡</span> Learning new web
          technologies
        </li>
        <li className="flex items-center">
          <span className="text-green-400 mr-2">➡</span> Creating responsive
          designs
        </li>
      </ul>

      <blockquote className={`mt-6 italic border-l-4 pl-4   ${isDarkMode? "text-green-400 border-green-400":"text-blue-700 border-blue-500"}`}>
        "In the realm of technology, curiosity is the key that unlocks endless
        possibilities."
      </blockquote>
      <cite className={`block mt-2 text-sm ${isDarkMode?"text-gray-400":"text-gray-600"}`}>
        — Satyendra Gautam
      </cite>

      <p className="mt-6">
        🚀 I am eager to find opportunities that challenge me and allow me to
        apply my skills in software development. Looking for a role that fosters
        professional growth.
      </p>
    </div>
  );
}

export default AboutSectionRight;
