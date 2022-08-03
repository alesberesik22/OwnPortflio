import React from "react";
import { useRef } from "react";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
import emailjs from "emailjs-com";

import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import "./Contacts.css";

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_twt8obt",
        "template_rsvny5r",
        form.current,
        "hw9Iz8o4qZWgK3IX4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contacts">
      <ParallaxProvider>
        <Parallax
          easing={"easeOutQuad"}
          translateY={[200, 60]}
          speed={-20}
          opacity={[-0.5, 1]}
        >
          <div className="contacts_text" style={{ textAlign: "center" }}>
            <h5>Get In Touch</h5>
            <h2>Contact me</h2>
          </div>
        </Parallax>
      </ParallaxProvider>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>beresik.ales@gmail.com</h5>
            <a href="mailto:beresik.ales@gmail.com">Send an email</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+421 902 424 187</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+421902424187"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Aleš Berešík</h5>
            <a
              href="https://www.linkedin.com/in/aleš-bereš%C3%ADk-b5584b169/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button typeof="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
