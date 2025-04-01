import React from 'react';
import { BookOpen, Briefcase } from 'lucide-react';
import SittingPerson from '../../assets/person.png';

function AboutSectionLeft({ isDarkMode }) {
  return (
    <div className="flex flex-col items-center mt-10">
      <div
        className={`w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-dashed transition-all duration-500 
          shadow-lg hover:scale-105 hover:shadow-xl ease-in-out 
          ${isDarkMode ? 'border-gray-100' : 'border-blue-400'}`}
      >
        <img src={SittingPerson} alt="Satyendra Gautam" className="w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Buttons Section */}
      <div className="mt-6 flex space-x-4">
        <a
          href="https://hashnode.com/@satyendra507"
          className={`flex items-center px-5 py-2 rounded-lg font-medium transition-all duration-300 shadow-md
            ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-blue-500 text-white hover:bg-blue-600'}
          `}
          target='_blank'
        >
          <BookOpen className="w-5 h-5 mr-2" />
          View My Blog
        </a>

        <a
          href="/projects"
          className={`flex items-center px-5 py-2 rounded-lg font-medium transition-all duration-300 shadow-md
            ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-green-500 text-white hover:bg-green-600'}
          `}
        >
          <Briefcase className="w-5 h-5 mr-2" />
          Projects
        </a>
      </div>
    </div>
  );
}

export default AboutSectionLeft;
