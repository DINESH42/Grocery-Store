import React from "react";

export default function ForgetPassword() {
  const oncloseFrgtBtn = () => {
    let forget = document.querySelector(".forget-password");
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

  return (
    <div>
      <form action="" className="forget-password" id="forget-password">
        <span>
          <h3>Forget Password</h3>
          <i
            className="fas fa-times"
            onClick={() => {
              oncloseFrgtBtn();
            }}
          ></i>
        </span>
        <input
          type="email"
          name="name"
          ie=""
          placeholder="Username"
          className="box"
        />
        <input
          type="password"
          name="password"
          ie=""
          placeholder="New Password"
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
        <p>
          <span onClick={() => onLoginClick()}>Go back to login</span>
        </p>
      </form>
    </div>
  );
}
