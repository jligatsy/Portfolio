import React from "react";
import "../styles/contact.css";
import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa"; // Importing icons

function Contact() {
  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-title">Contact</h2>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://www.instagram.com/josephinelaine" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="mailto:ligatsyahj@gmail.com">
          <FaEnvelope className="icon" />
        </a>
        <a href="https://www.linkedin.com/josephine-ligatsyah" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" placeholder="Name*" required className="contact-input" />
        <input type="email" placeholder="Email ID*" required className="contact-input" />
        <textarea placeholder="Message*" required className="contact-input message-box"></textarea>
        <button type="submit" className="contact-button">Send</button>
      </form>
    </section>
  );
}

export default Contact;
