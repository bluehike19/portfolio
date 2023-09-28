import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";

const Footer = () => {
  const phoneNumber = "0792409237";
  const message = "Hello, I have a question!";
  const whatsappLink = `https://wa.me${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <>
      <div className="footer">
        <div className="footer-p">
          <p>
            Copyright © 2023, blue<span className="blue">H</span>ike Inc.
          </p>
        </div>
        <div className="footer-icons">
          <a href="https://github.com/simo6lues">
            <FaGithub />
          </a>
          <a href="https://github.com/simo6lues">
            <FaTwitter />
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MdOutlineWhatsapp />
          </a>
          <a href="https://github.com/simo6lues">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
