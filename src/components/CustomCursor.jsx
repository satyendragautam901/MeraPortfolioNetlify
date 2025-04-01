import { useEffect, useState } from "react";

const CustomCursor = ({ isDarkMode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-10000">
      <div
        className={`absolute rounded-full transition-all duration-200 ease-out transform -translate-x-1/2 -translate-y-1/2`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "40px",
          height: "40px",
          boxShadow: `0 0 25px 8px ${isDarkMode ? "#90CDF4" : "#06B6D4"}`,
          backgroundColor: isDarkMode ? "#90CDF455" : "#06B6D455",
        }}
      />
    </div>
  );
};

export default CustomCursor;
