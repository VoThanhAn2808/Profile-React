import React, { useRef } from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { TbPhoneCall } from "react-icons/tb";
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_14hmnc5', 'template_wp55wim', form.current, 'cQXkxs111Sw-w_sxL')

    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>Anvtde150318@fpt.edu.vn</h5>
            <a href="mailto:Anvtde150318@fpt.edu.vn" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Võ Thành An</h5>
            <a href="https://m.me/VTAN280801" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <TbPhoneCall className="contact__option-icon"/>
            <h4>Phone</h4>
            <h5>+84 373385291</h5>
            <a href="0373385291" target="_blank">
              Call Me
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
