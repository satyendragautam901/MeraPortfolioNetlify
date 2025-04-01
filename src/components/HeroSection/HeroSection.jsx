import React from "react";
import HeroSectionLeft from "./HeroSectionLeft";
import HeroSectionRight from "./HeroSectionRight";

const HeroSection = ({ isDarkMode }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-evenly min-h-screen p-8 transition-all duration-500 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}`}>
      <HeroSectionLeft isDarkMode={isDarkMode} />
      <HeroSectionRight isDarkMode={isDarkMode} />
    </div>
  );
};

export default HeroSection;
