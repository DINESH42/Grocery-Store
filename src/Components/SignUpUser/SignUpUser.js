import React from "react";

export default function SignUpUser() {
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

  return (
    <div>
      <form action="" className="signup-form" id="signup-form">
        <h3>SignUp</h3>
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
    </div>
  );
}
