import React from "react";
import "./About.css";
import ME from "../../assets/meImg(1).jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { ImLibrary } from "react-icons/im";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about_me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>CGPA</h5>
              <small>8.91</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              {/* To Do */}
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
              {/* TO DO */}
            </article>

            <article className="about__card">
              <ImLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>7 Completed</small>
            </article>
          </div>
          <p>
            Motivated and personable student pursuing B.tech in Computer Science
            with specialisation in Artificial Intelligence at the prestigious
            Netaji Subhas University of Technology (CGPA - 8.9). I have a strong
            theoretical background in programming and problem solving.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
