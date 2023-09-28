import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import Toggle from "./Toggle";

const Header = () => {
  return (
    <>
      <div className="header">
        <a href="/" className="brand">
          <TbBrandBooking />
        </a>
        <h2>blueHike</h2>
        <Toggle />
        <div className="header-link">
          <a href="https://github.com/simo6lues">
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
