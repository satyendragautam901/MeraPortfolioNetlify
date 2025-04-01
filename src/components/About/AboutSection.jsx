import React from 'react';
import AboutSectionLeft from './AboutSectionLeft';
import AboutSectionRight from './AboutSectionRight';

function AboutSection({ isDarkMode }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-evenly min-h-screen p-12 transition-all duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
      
    >
      <AboutSectionLeft isDarkMode={isDarkMode} />
      <AboutSectionRight isDarkMode={isDarkMode} />
    </div>
  );
}

export default AboutSection;
