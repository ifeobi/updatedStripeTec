import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.scss";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.React_App_SERVICE_ID}`,
        `${process.env.React_App_TEMPLATE_ID}`,        
        form.current,
        `${process.env.React_App_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();          
        },
        (error) => {
          console.log(error.text);          
        }
      );
  };
  return (
    <div
      className="dentistSection5-overlay"
      style={{ backgroundColor: "rgba(1,18,93,0.78)" }}
    >
      <div className="container">
        <h1>Find Out How We Can Bring You New Customers / Clients</h1>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="contact-form-text"
            placeholder="Full name:"
            required
            name="user_name"
          />
          <input
            type="email"
            className="contact-form-text"
            placeholder="Email:"
            required
            name="user_email"
          />
          <input
            type="text"
            className="contact-form-text"
            placeholder="Phone number:"
            required
            name="user_phone"
          />
          <textarea
            className="contact-form-text"
            placeholder="How may we assist you?"
            required
            name="message"
          ></textarea>
          <input type="submit" className="contact-form-btn" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Form;
