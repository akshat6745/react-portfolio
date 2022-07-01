import React from "react";
import "./services.css";
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Problem Solving</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Hundereds of Problems on Leetcode.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Dozens of Contest to Proove my skills.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Good at thinking under Pressure</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Scored Excellent in College Practical Exams</p>
            </li>
          </ul>
        </article>
        {/* End of UI */}
        <article className="service">
          <div className="service__head">
            <h3>Full Stack Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Used HTML , CSS, JS</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Used Node JS , Express JS in Projects</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Used Mongo DB for DataBase related services</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Deployed Multiple FrontEnd and Fullstack Projects</p>
            </li>
          </ul>
        </article>
        {/* End of Web Deveopment */}
      </div>
    </section>
  );
};

export default Services;
