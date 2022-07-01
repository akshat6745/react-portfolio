import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_u41pc0m",
      "template_6tsgv1p",
      form.current,
      "wAYnXiW1X7jH599w-"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div class="container contact__container">
        <div class="contact__options">
          <article class="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>akshataggarwal</h5>
            <a href="mailto:akshat.aggarwal9812@gmail.com">Send a Message</a>
          </article>
          <article class="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>Akshat Aggarwal</h5>
            <a href="https://m.me/akshat.aggarwal.5036">Send a Message</a>
          </article>
          <article class="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 989xxxx</h5>
            <a href="https://api.whatsapp.com/send?phone=919891029069">
              Send a Message
            </a>
          </article>
        </div>
        {/* <!-- End of Contact Options --> */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
