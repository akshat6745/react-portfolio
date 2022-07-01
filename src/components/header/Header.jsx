import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/meImg_2-removebg-preview.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Akshat Aggarwal</h1>
        <h5 className="text-light">Student</h5>
        <CTA />
        <div className="me">
          <img className="Me" src={ME} alt=""></img>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
