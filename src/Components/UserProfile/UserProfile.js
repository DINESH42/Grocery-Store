import React from "react";
import "./UserProfile.css";
// import user_Profile_back from "../../assests/image/profile_2.png";
import user_Profile from "../../assests/image/userProfile.jpg";

export default function UserProfile() {
  const onForgetPassword = () => {
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

  return (
    <div className="main_container">
      <div className="userProfile">
        <img src={user_Profile} alt="/" />
        <div className="userName_section">
          <span>Username</span>
          <p>Dinesh Kumar</p>
        </div>
      </div>
      <div className="userDetails">
        <div className="rowDetails">
          <label>Name</label>
          <input type="text" value="User Name" readonly />
        </div>
        <div className="rowDetails">
          <label>Email</label>
          <input type="email" value="email@gmail.com" readonly />
        </div>
        <div className="rowDetails">
          <label>Address</label>
          <input type="text" value="Address" readonly />
        </div>
        <div className="rowDetails">
          <label>Pin code</label>
          <input type="text" value="587421" readonly />
        </div>
      </div>
      <div className="forgetpassword">
        <button
          className="btn"
          onClick={() => {
            onForgetPassword();
          }}
        >
          Forget Password
        </button>
      </div>
    </div>
  );
}
