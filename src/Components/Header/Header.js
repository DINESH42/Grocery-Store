import React, { useState } from "react";
import "./Header.css";
import Cart1 from "../../assests/image/cart-1.jpg";
import Cart2 from "../../assests/image/cart-2.jpg";
import Cart3 from "../../assests/image/cart-3.jpg";

export default function Header() {
  const [isSearch, setIsSearch] = useState(false);
  const [isShoppingCart, setIsShoppingCart] = useState(false);

  const onSearchClick = () => {
    setIsSearch(!isSearch);
  };
  const onShoppingCart = () => {
    setIsShoppingCart(!isShoppingCart);
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        <i class="fas fa-shopping-basket"></i> Grocery
      </a>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/">Shop</a>
        <a href="/">About</a>
        <a href="/">Review</a>
        <a href="/">Blog</a>
        <a href="/">Contact</a>
      </nav>
      <div className="icons">
        <div id="menu-bar" className="fas fa-bars"></div>
        <div
          id="search-bar"
          className="fas fa-search"
          onClick={() => onSearchClick()}
        ></div>
        <div
          id="cart-bar"
          className="fas fa-shopping-cart"
          onClick={() => {
            onShoppingCart();
          }}
        ></div>
        <div id="login-btn" className="fas fa-user"></div>
      </div>

      {isSearch && (
        <form action="" className="search-form">
          <input type="search" placeholder="search here..." id="search-box" />
          <label id="seach-box" className="fas fa-search"></label>
        </form>
      )}
      {isShoppingCart && (
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
          <a href="" className="btn">
            checkout cart
          </a>
        </div>
      )}
    </header>
  );
}
