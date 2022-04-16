import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import "./Contacts.css";

const Contacts = () => {
  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>beresik.ales@gmail.com</h5>
            <a href="mailto:beresik.ales@gmail.com">Send an email</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp />
            <h4>Whats app</h4>
            <h5>Aleš Berešík</h5>
            <a href="https://m.me/aleš-berešík-b5584b169">Send a message</a>
          </article>
          <article className="contact_option">
            <BsLinkedin />
            <h4>LinkedIn</h4>
            <h5>Aleš Berešík</h5>
            <a href="https://m.me/">Send a message</a>
          </article>
        </div>
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contacts;
