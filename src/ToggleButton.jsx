import React, { useState } from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';

const ToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="container-fluid mt-3">
      <nav
        className={`navbar ${
          isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
      >
        <div className="container-fluid">
          <img
            src={
              isDarkMode
                ? "http://placehold.co/64x64/000000/FFFFFF?text=Dark&font=Poppins"
                : "http://placehold.co/64x64/FFFFFF/000000?text=Light&font=Poppins"
            }
            alt="logo"
          />
          <h3 className={isDarkMode ? "text-light" : "text-dark"}>
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </h3>
        </div>
      </nav>

      <div className="container text-center py-5">
      <h1>{isDarkMode ? 'Dark Mode is on' : 'Light Mode is on'}</h1>

        <button
          className={`btn ${isDarkMode ? "btn-primary" : "btn-dark"}`}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
        </button>

      </div>
    </div>
  );
};

export default ToggleButton;