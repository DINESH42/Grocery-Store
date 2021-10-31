import React from "react";
import "./ContactUs.css";
import { URL } from "../../constants";

export default function ContactUs() {
  return (
    <div>
      <div className="heading">
        <h1>contact us</h1>
        <p>
          <a href={URL.HOME}>Home{">>"}</a>Contact
        </p>
      </div>
      <section className="contact">
        <div className="contact-container">
          <div className="contact-box">
            <i className="fas fa-phone"></i>
            <h3>our number</h3>
            <p>+9856587425</p>
          </div>
          <div className="contact-box">
            <i className="fas fa-envelope"></i>
            <h3>our email</h3>
            <p>xyz@gmail.com</p>
          </div>
          <div className="contact-box">
            <i className="fas fa-map-marker-alt"></i>
            <h3>our address</h3>
            <p>xyz, up(258741)</p>
          </div>
        </div>
        <div className="row-container">
          <form action="">
            <h3>get in touch</h3>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Enter your name"
                className="box"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="box"
              />
            </div>
            <div className="inputBox">
              <input
                type="number"
                placeholder="Enter your number"
                className="box"
              />
              <input
                type="text"
                placeholder="Enter your subject"
                className="box"
              />
            </div>
            <textarea placeholder="Your message" cols="30" rows="10"></textarea>
            <input type="submit" value="send message" className="btn" />
          </form>
        </div>
      </section>
    </div>
  );
}
