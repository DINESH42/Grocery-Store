import React from "react";
import "./Header.css";
import { URL } from "../../constants";
import Cart1 from "../../assests/image/cart-1.jpg";
import Cart2 from "../../assests/image/cart-2.jpg";
import Cart3 from "../../assests/image/cart-3.jpg";
import Headers from "./Header.json";

export default function Header() {
  const onSearchClick = () => {
    let searchForm = document.querySelector(".search-form");
    let shoppingCart = document.querySelector(".shopping-cart");
    let login = document.querySelector(".login-form");
    let navbar = document.querySelector(".navbar");
    let signup = document.querySelector(".signup-form");
    let forget = document.querySelector(".forget-password");
    searchForm.classList.toggle("active");
    shoppingCart.classList.remove("active");
    login.classList.remove("active");
    navbar.classList.remove("active");
    signup.classList.remove("active");
    forget.classList.remove("active");
  };
  const onShoppingCart = () => {
    let shoppingCart = document.querySelector(".shopping-cart");
    let searchForm = document.querySelector(".search-form");
    let login = document.querySelector(".login-form");
    let navbar = document.querySelector(".navbar");
    let signup = document.querySelector(".signup-form");
    let forget = document.querySelector(".forget-password");
    shoppingCart.classList.toggle("active");
    searchForm.classList.remove("active");
    login.classList.remove("active");
    navbar.classList.remove("active");
    signup.classList.remove("active");
    forget.classList.remove("active");
  };

  const onLoginClick = () => {
    let login = document.querySelector(".login-form");
    let searchForm = document.querySelector(".search-form");
    let shoppingCart = document.querySelector(".shopping-cart");
    let navbar = document.querySelector(".navbar");
    login.classList.toggle("active");
    let forget = document.querySelector(".forget-password");
    let signup = document.querySelector(".signup-form");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    navbar.classList.remove("active");
    signup.classList.remove("active");
    forget.classList.remove("active");
  };

  const onMenubar = () => {
    let navbar = document.querySelector(".navbar");
    let searchForm = document.querySelector(".search-form");
    let shoppingCart = document.querySelector(".shopping-cart");
    let login = document.querySelector(".login-form");
    let signup = document.querySelector(".signup-form");
    let forget = document.querySelector(".forget-password");
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    login.classList.remove("active");
    signup.classList.remove("active");
    forget.classList.remove("active");
  };

  const onSignup = () => {
    let signup = document.querySelector(".signup-form");
    let navbar = document.querySelector(".navbar");
    let searchForm = document.querySelector(".search-form");
    let shoppingCart = document.querySelector(".shopping-cart");
    let login = document.querySelector(".login-form");
    let forget = document.querySelector(".forget-password");
    signup.classList.toggle("active");
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    login.classList.remove("active");
    forget.classList.remove("active");
  };

  window.onscroll = () => {
    let searchForm = document.querySelector(".search-form");
    let shoppingCart = document.querySelector(".shopping-cart");
    let login = document.querySelector(".login-form");
    let navbar = document.querySelector(".navbar");
    let signup = document.querySelector(".signup-form");
    let forget = document.querySelector(".forget-password");
    signup.classList.remove("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    login.classList.remove("active");
    navbar.classList.remove("active");
    forget.classList.remove("active");
  };
  const onForgetBtn = () => {
    let forget = document.querySelector(".forget-password");
    let searchForm = document.querySelector(".search-form");
    let shoppingCart = document.querySelector(".shopping-cart");
    let login = document.querySelector(".login-form");
    let navbar = document.querySelector(".navbar");
    let signup = document.querySelector(".signup-form");
    forget.classList.toggle("active");
    signup.classList.remove("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    login.classList.remove("active");
    navbar.classList.remove("active");
  };

  console.log("header value: ", Headers);

  return (
    <header className="header">
      <a href={URL.HOME} className="logo">
        <i className="fas fa-shopping-basket"></i> Grocery
      </a>
      <nav className="navbar">
        <a href={URL.HOME}>Home</a>
        <a href={URL.SHOPS}>Shop</a>
        <a href={URL.ABOUT}>About</a>
        <a href={URL.REVIEW}>Review</a>
        <a href={URL.BLOGS}>Blog</a>
        <a href={URL.CONTACTUS}>Contact</a>
      </nav>
      <div className="icons">
        <div
          id="menu-bar"
          className="fas fa-bars"
          onClick={() => onMenubar()}
        ></div>
        <div
          id="search-btn"
          className="fas fa-search"
          onClick={() => onSearchClick()}
        ></div>
        <div
          id="cart-btn"
          className="fas fa-shopping-cart"
          onClick={() => onShoppingCart()}
        ></div>
        <div
          id="login-btn"
          className="fas fa-user"
          onClick={() => {
            onLoginClick();
          }}
        ></div>
      </div>

      <form action="" className="search-form">
        <input type="search" placeholder="search here..." id="search-box" />
        <label id="seach-box" className="fas fa-search"></label>
      </form>
      <div className="shopping-cart">
        <div className="box">
          <i className="fas fa-times"></i>
          <img src={Cart1} alt="" />
          <div className="content">
            <h3>Organic Food</h3>
            <span className="quantity">1</span>
            <span className="multiply">X</span>
            <span className="price">$10.58</span>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-times"></i>
          <img src={Cart2} alt="" />
          <div className="content">
            <h3>Organic Food</h3>
            <span className="quantity">1</span>
            <span className="multiply">X</span>
            <span className="price">$10.58</span>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-times"></i>
          <img src={Cart3} alt="" />
          <div className="content">
            <h3>Organic Food</h3>
            <span className="quantity">1</span>
            <span className="multiply">X</span>
            <span className="price">$10.58</span>
          </div>
        </div>
        <h3 className="total">
          total: <span>$31.74</span>
        </h3>
        <a href={URL.HOME} className="btn">
          checkout cart
        </a>
      </div>
      <form action="" className="login-form">
        <h3>Login</h3>
        <input
          type="email"
          name="name"
          ie=""
          placeholder="Enter your email"
          className="box"
        />
        <input
          type="password"
          name="password"
          ie=""
          placeholder="Enter password"
          className="box"
        />
        <div className="remember">
          <input type="checkbox" name="" id="remember-me" />
          <label if="remember-me">remember me</label>
        </div>
        <input type="submit" value="login" className="btn" />
        <p>
          forget password?
          <span
            onClick={() => {
              onForgetBtn();
            }}
          >
            click here
          </span>
        </p>
        <p>
          don't have an account?
          <span
            onClick={() => {
              onSignup();
            }}
          >
            Create account
          </span>
        </p>
      </form>
      <form action="" className="signup-form">
        <h3>Sign</h3>
        <input
          type="email"
          name="name"
          ie=""
          placeholder="Enter your email"
          className="box"
        />
        <input
          type="password"
          name="password"
          ie=""
          placeholder="Password"
          className="box"
        />
        <input
          type="password"
          name="password"
          ie=""
          placeholder="Confirm password"
          className="box"
        />
        <div className="remember">
          <input type="checkbox" name="" id="remember-me" />
          <label if="remember-me">remember me</label>
        </div>
        <input type="submit" value="signUp" className="btn" />
        <p>
          already have an account?
          <span onClick={() => onLoginClick()}>login account</span>
        </p>
      </form>
      <form action="" className="forget-password">
        <h3>Forget Password</h3>
        <input
          type="email"
          name="name"
          ie=""
          placeholder="Enter your email"
          className="box"
        />
        <input
          type="password"
          name="password"
          ie=""
          placeholder="Password"
          className="box"
        />
        <input
          type="password"
          name="password"
          ie=""
          placeholder="Confirm password"
          className="box"
        />
        <input type="submit" value="forget passord" className="btn" />
        <p className="signup-login">
          <span onClick={() => onLoginClick()}>login account</span>
          <span onClick={() => onSignup()}>signup account</span>
        </p>
      </form>
    </header>
  );
}
