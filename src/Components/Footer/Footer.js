import React from "react";
import "./Footer.css";
import payment from "../../assests/image/payment.png";

export default function Footer() {
  return (
    <div>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick linkes</h3>
            <a href="/">
              <i className="fas fa-arrow-right"></i>Home
            </a>
            <a href="/">
              <i className="fas fa-arrow-right"></i>Shop
            </a>
            <a href="/">
              <i className="fas fa-arrow-right"></i>About
            </a>
            <a href="/">
              <i className="fas fa-arrow-right"></i>Review
            </a>
            <a href="/">
              <i className="fas fa-arrow-right"></i>Blog
            </a>
            <a href="/">
              <i className="fas fa-arrow-right"></i>Contact
            </a>
          </div>
          <div className="box">
            <h3>Extra links</h3>
            <a href="/">
              <i className="fas fa-arrow-right"></i>My order
            </a>
            <a href="/">
              <i className="fas fa-arrow-right"></i>My favorite
              <a href="/">
                <i className="fas fa-arrow-right"></i>My wishlist
              </a>
              <a href="/">
                <i className="fas fa-arrow-right"></i>My account
              </a>
              <a href="/">
                <i className="fas fa-arrow-right"></i>term or use
              </a>
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
        created by Dinesh Kumar & all rights reserved
      </section>
    </div>
  );
}
