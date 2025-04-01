import React, { useEffect, useState, useRef } from "react";

const skills = [
  { name: "C++", level: 90 },
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Python", level: 75 },
  { name: "React", level: 75 },
  { name: "Django", level: 70 },
  { name: "MySQL", level: 70 },
  { name: "GitHub", level: 70 },
  { name: "Git", level: 70 },
];

function Skills({ isDarkMode }) {
  const [animate, setAnimate] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.4 } // Trigger when 40% of section is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      
      ref={skillsRef}
      className={`py-16 transition-all duration-500 max-w-3xl flex flex-col items-center justify-center mx-auto ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-12 mt-5">Skills</h2>

      <div className="container mx-auto px-6">
        <h3 className="text-center italic text-lg mb-6">
          Embark on a journey through my skill set—where innovation meets expertise!
        </h3>

        {/* Skills List */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-lg font-medium">{skill.name}</span>
              <div className="relative w-full bg-gray-300 dark:bg-gray-700 h-4 rounded-lg mt-1 overflow-hidden">
                {/* Progress Bar */}
                <div
                  className="h-full bg-blue-500 dark:bg-blue-400 rounded-lg transition-all duration-[1500ms] ease-in-out"
                  style={{
                    width: animate ? `${skill.level}%` : "0%",
                  }}
                ></div>

                {/* Percentage Text (Positioned at End of Progress) */}
                <span
                  className="absolute top-1/2 transform -translate-y-1/2 text-xs font-semibold text-white"
                  style={{
                    left: animate ? `calc(${skill.level}% - 2rem)` : "0%", // Adjusts dynamically
                    transition: "left 1.4s ease-in-out",
                  }}
                >
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
