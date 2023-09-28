import React, { useEffect, useState } from "react";
import { BsMoon } from "react-icons/bs";
import { WiDaySunny } from "react-icons/wi";
const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);
  return (
    <>
      <div className={`app ${isDarkMode ? "dark" : "light"}`}>
        <button className="toggle" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <WiDaySunny className="sun" />
          ) : (
            <BsMoon className="moon" />
          )}
        </button>
      </div>
    </>
  );
};

export default Toggle;
