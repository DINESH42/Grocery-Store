import React from "react";
import "./Footer.css";
import payment from "../../assests/image/payment.png";
import Card from "../../assests/image/CardPayment.jpg";
import upiPay from "../../assests/image/UPIPay.png";
import phonePay from "../../assests/image/PhonePay.png";
import googlePay from "../../assests/image/GooglePay.png";
import amazonPay from "../../assests/image/AmazonPAy.png";
import { URL } from "../../constants";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick linkes</h3>
            <Link to={URL.HOME}>
              <i className="fas fa-arrow-right"></i>Home
            </Link>
            <Link to={URL.SHOPS}>
              <i className="fas fa-arrow-right"></i>Shop
            </Link>
            <Link to={URL.ABOUT}>
              <i className="fas fa-arrow-right"></i>About
            </Link>
            <Link to={URL.REVIEW}>
              <i className="fas fa-arrow-right"></i>Review
            </Link>
            <Link to={URL.BLOGS}>
              <i className="fas fa-arrow-right"></i>Blog
            </Link>
            <Link to={URL.CONTACTUS}>
              <i className="fas fa-arrow-right"></i>Contact
            </Link>
          </div>
          <div className="box">
            <h3>Extra links</h3>
            <Link to={URL.HOME}>
              <i className="fas fa-arrow-right"></i>My order
            </Link>
            <Link to={URL.HOME}>
              <i className="fas fa-arrow-right"></i>My favorite
            </Link>
            <Link to={URL.HOME}>
              <i className="fas fa-arrow-right"></i>My wishlist
            </Link>
            <Link to={URL.HOME}>
              <i className="fas fa-arrow-right"></i>My account
            </Link>
            <Link to={URL.HOME}>
              <i className="fas fa-arrow-right"></i>term of use
            </Link>
          </div>
          <div className="box">
            <h3>Follow me</h3>
            <Link to="https://www.facebook.com/350dkcse/">
              <i className="fab fa-facebook-f"></i> facebook
            </Link>
            <Link to="https://twitter.com/Dineshk47042114">
              <i className="fab fa-twitter"></i> twitter
            </Link>
            <Link to={URL.HOME}>
              <i className="fab fa-instagram"></i> instagram
            </Link>
            <Link to="https://www.linkedin.com/in/dinesh-kumar-38424614a/">
              <i className="fab fa-linkedin"></i> linkedin
            </Link>
          </div>
          <div className="box">
            <h3>new letters</h3>
            <p>subscribe for latest updates</p>
            <form action="">
              <input type="email" placeholder="enter your email" />
              <input type="submit" value="subscribe" className="btn" />
            </form>
            <img src={payment} alt="" className="payment" />
            {/* <nav className="payNavbar">
              <Link to={URL.HOME}>
                Card
                <img src={Card} alt="card"></img>
              </Link>
              <Link to={URL.ABOUT}>
                UPI
                <img src={upiPay} alt="upi"></img>
              </Link>
              <Link to={URL.REVIEW}>
                PhonePay
                <img src={phonePay} alt="PhonePay"></img>
              </Link>
              <Link to={URL.REVIEW}>
                GoogePay
                <img src={googlePay} alt="GoogePay"></img>
              </Link>
              <Link to={URL.SHOPS}>
                AmazonPay
                <img src={amazonPay} alt="AmazonPay"></img>
              </Link>
            </nav> */}
          </div>
        </div>
      </section>
      <section className="credit">
        created by <span>Dinesh Kumar</span> & all rights reserved!
      </section>
    </div>
  );
}
