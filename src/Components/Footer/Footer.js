import React from "react";
import "./Footer.css";
import payment from "../../assests/image/payment.png";
import { URL } from "../../constants";

export default function Footer() {
  return (
    <div>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick linkes</h3>
            <a href={URL.HOME}>
              <i className="fas fa-arrow-right"></i>Home
            </a>
            <a href={URL.SHOPS}>
              <i className="fas fa-arrow-right"></i>Shop
            </a>
            <a href={URL.ABOUT}>
              <i className="fas fa-arrow-right"></i>About
            </a>
            <a href={URL.REVIEW}>
              <i className="fas fa-arrow-right"></i>Review
            </a>
            <a href={URL.BLOGS}>
              <i className="fas fa-arrow-right"></i>Blog
            </a>
            <a href={URL.CONTACTUS}>
              <i className="fas fa-arrow-right"></i>Contact
            </a>
          </div>
          <div className="box">
            <h3>Extra links</h3>
            <a href={URL.HOME}>
              <i className="fas fa-arrow-right"></i>My order
            </a>
            <a href={URL.HOME}>
              <i className="fas fa-arrow-right"></i>My favorite
            </a>
            <a href={URL.HOME}>
              <i className="fas fa-arrow-right"></i>My wishlist
            </a>
            <a href={URL.HOME}>
              <i className="fas fa-arrow-right"></i>My account
            </a>
            <a href={URL.HOME}>
              <i className="fas fa-arrow-right"></i>term of use
            </a>
          </div>
          <div className="box">
            <h3>Follow me</h3>
            <a href="https://www.facebook.com/350dkcse/">
              <i className="fab fa-facebook-f"></i> facebook
            </a>
            <a href="https://twitter.com/Dineshk47042114">
              <i className="fab fa-twitter"></i> twitter
            </a>
            <a href={URL.HOME}>
              <i className="fab fa-instagram"></i> instagram
            </a>
            <a href="https://www.linkedin.com/in/dinesh-kumar-38424614a/">
              <i className="fab fa-linkedin"></i> linkedin
            </a>
          </div>
          <div className="box">
            <h3>new letters</h3>
            <p>subscribe for latest updates</p>
            <form action="">
              <input type="email" placeholder="enter your email" />
              <input type="submit" value="subscribe" className="btn" />
            </form>
            <img src={payment} alt="" className="payment" />
          </div>
        </div>
      </section>
      <section className="credit">
        created by <span>Dinesh Kumar</span> & all rights reserved!
      </section>
    </div>
  );
}
