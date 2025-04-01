import React from "react";
import { Link } from "react-router-dom"; // If using React Router

const ErrorPage = ({ errorCode, message, description, showHomeButton = true }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="text-[12rem] font-bold text-gray-600 drop-shadow-lg">
        {errorCode}
      </div>
      <h3 className="text-3xl text-gray-600">{message}</h3>
      <p className="text-lg text-gray-500 max-w-md">{description}</p>
      
      {showHomeButton && (
        <Link
          to="/"
          className="mt-4 px-6 py-3 text-md text-white bg-blue-500 rounded-lg transition hover:bg-blue-600"
        >
          Return to Home
        </Link>
      )}
    </div>
  );
};

export default ErrorPage;
