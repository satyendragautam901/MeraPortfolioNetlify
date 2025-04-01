import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import ErrorPage from "./components/ErrorPage";
import AboutSection from "./components/About/AboutSection";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Router>
      <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"} min-h-screen relative`}>
        {/* Custom Cursor (Always Active) */}
        {/* <CustomCursor isDarkMode={isDarkMode} /> */}

        {/* Navbar (Always Visible) */}
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<HeroSection isDarkMode={isDarkMode} />} />
          <Route path="/about" element={<AboutSection isDarkMode={isDarkMode} />} />
          <Route path="/education" element={<Education isDarkMode={isDarkMode} />} />
          <Route path="/experience" element={<Experience isDarkMode={isDarkMode} />} />
          <Route path="/skills" element={<Skills isDarkMode={isDarkMode} />} />
          <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
          <Route 
            path="*" 
            element={<ErrorPage errorCode="404" message="Page Not Found" description="Oops! The page you are looking for does not exist." />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
