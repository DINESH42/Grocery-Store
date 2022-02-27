import React, { useState, useContext } from "react";
import "./Header.css";
import { useHistory, Link } from "react-router-dom";
import { URL } from "../../constants";
import Cart1 from "../../assests/image/cart-1.jpg";
import Cart2 from "../../assests/image/cart-2.jpg";
import Cart3 from "../../assests/image/cart-3.jpg";
import Headers from "./Header.json";
import { useSelector, useDispatch } from "react-redux";
import { SignUpUserAction } from "../../BackendCalls/Actions/SignUpUserAction";
import { AppContext } from "../../ContextFile/Context";

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { theme, onHandleName } = useContext(AppContext);

  const LoginUser = useSelector((state) => state.LoginUser);
  const SignUpUser = useSelector((state) => state.SignUpUser);
  console.log("Login User :- ", LoginUser);
  console.log("SignUp User :- ", SignUpUser);

  const initSignUp = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [signUser, setSignUser] = useState(initSignUp);

  const onChangeSignUp = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignUser({
      ...signUser,
      [name]: value,
    });
  };

  const onSignUpAction = () => {
    dispatch(SignUpUserAction(signUser));
    console.log("signUser :", signUser);
  };

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

  const oncloseFrgtBtn = () => {
    let forget = document.querySelector(".forget-password");
    forget.classList.remove("active");
  };

  const onLoginUser = () => {
    history.push(URL.USER_PROFILE);
  };

  console.log("header value: ", Headers);

  // window.onscroll = () => {
  //   // let navbar1 = document.querySelector(".navbar");
  //   // navbar1.classList.remove("active");
  // if (window.scrollY > 60) {
  //   document.querySelector("#scroll-top").classList.add("active");
  // } else {
  //   document.querySelector("#scroll-top").classList.remove("active");
  // }
  // };

  const onThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    onHandleName(newTheme);
  };
  console.log("Onchange theme", theme);

  return (
    <header className="header">
      {/* <Link to={URL.HOME} className="fas fa-angle-up" id="scroll-top"></Link> */}
      <a href={URL.HOME} className="logo">
        <i className="fas fa-shopping-basket"></i> Grocery
      </a>
      <nav className="navbar">
        <Link to={URL.HOME}>Home</Link>
        <Link to={URL.SHOPS}>Shop</Link>
        <Link to={URL.ABOUT}>About</Link>
        <Link to={URL.REVIEW}>Review</Link>
        <Link to={URL.BLOGS}>Blog</Link>
        <Link to={URL.CONTACTUS}>Contact</Link>
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
        <div
          id="login-btn"
          className="fas fa-moon"
          onClick={() => {
            onThemeChange();
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
        <button onClick={() => onLoginUser()} className="btn">
          Login
        </button>
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
      <div action="" className="signup-form">
        <h3>SignUp</h3>
        <input
          type="email"
          name="email"
          ie=""
          placeholder="Enter your email"
          className="box"
          onChange={onChangeSignUp}
        />
        <input
          type="password"
          name="password"
          ie=""
          placeholder="Password"
          className="box"
          onChange={onChangeSignUp}
        />
        <input
          type="password"
          name="confirmPassword"
          ie=""
          placeholder="Confirm password"
          className="box"
          onChange={onChangeSignUp}
        />
        <div className="remember">
          <input type="checkbox" name="" id="remember-me" />
          <label if="remember-me">remember me</label>
        </div>
        <button
          className="btn"
          onClick={() => {
            onSignUpAction();
          }}
        >
          SignUp
        </button>
        <p>
          already have an account?
          <span onClick={() => onLoginClick()}>login account</span>
        </p>
      </div>
      <form action="" className="forget-password">
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
    </header>
  );
}
