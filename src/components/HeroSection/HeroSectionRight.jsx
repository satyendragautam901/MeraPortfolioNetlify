import React from 'react';
import SattuImg from '../../assets/saty.jpg';

const HeroSectionRight = ({ isDarkMode }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-dotted border-4 
        ${isDarkMode ? 'border-gray-100 shadow-gray-50' : 'border-blue-400 shadow-lg'}
        hover:scale-105 hover:shadow-sm transition-transform duration-500 ease-in-out`}
      >
        <img
          src={SattuImg}
          alt="Satyendra Gautam"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default HeroSectionRight;
