import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/akshat-aggarwal-27380/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/akshat6745" target="_blank" rel="noreferrer">
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
  );
};

export default HeaderSocials;
