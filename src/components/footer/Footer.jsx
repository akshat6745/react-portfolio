import React from "react";
import "./footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        My Portfolio
      </a>
      <ul className="permalinks">
        <l1>
          <a href="#">Home</a>
        </l1>
        <l1>
          <a href="#about">About</a>
        </l1>
        <l1>
          <a href="#experience">Experience</a>
        </l1>
        <l1>
          <a href="#services">Services</a>
        </l1>
        <l1>
          <a href="#portfolio">Portfolio</a>
        </l1>
        <l1>
          <a href="#contact">Contact</a>
        </l1>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/akshat-aggarwal-27380/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/akshat6745"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://leetcode.com/user5262rR/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
