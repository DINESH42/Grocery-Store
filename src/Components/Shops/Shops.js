import React from "react";
import "./Shops.css";
import { URL } from "../../constants";
import imgcategory1 from "../../assests/image/cat-1.png";
import imgcategory2 from "../../assests/image/cat-2.png";
import imgcategory3 from "../../assests/image/cat-3.png";
import imgcategory5 from "../../assests/image/cat-5.png";
import imgProduct1 from "../../assests/image/product-1.jpg";
import imgProduct2 from "../../assests/image/product-2.jpg";
import imgProduct3 from "../../assests/image/product-5.jpg";
import imgProduct4 from "../../assests/image/product-4.jpg";
import imgProduct5 from "../../assests/image/product-5.jpg";
import imgProduct6 from "../../assests/image/product-6.jpg";
import imgProduct7 from "../../assests/image/product-7.jpg";
import imgProduct8 from "../../assests/image/product-8.jpg";
import { Link } from "react-router-dom";

export default function Shops() {
  return (
    <div>
      <div className="heading">
        <h1>our shop</h1>
        <p>
          <Link to={URL.HOME}>Home{">>"}</Link>Shop
        </p>
      </div>
      <section className="category">
        <h1 className="title">
          our <span>category</span> <Link to={URL.SHOPS}>View all {">>"}</Link>
        </h1>
        <div className="box-container">
          <Link to={URL.FRUITS} className="box">
            <img src={imgcategory1} alt="" />
            <h3>fresh fruits</h3>
          </Link>
          <Link to={URL.VEGITABLES} className="box">
            <img src={imgcategory2} alt="" />
            <h3>vegetables</h3>
          </Link>
          <Link to={URL.SPICES} className="box">
            <img src={imgcategory3} alt="" />
            <h3>organic spices</h3>
          </Link>
          <Link to={URL.WHEAT} className="box">
            <img src={imgcategory5} alt="" />
            <h3>organic wheat</h3>
          </Link>
        </div>
      </section>
      <section className="products">
        <h1 className="title">
          our <span>category</span> <Link to={URL.SHOPS}>View all {">>"}</Link>
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="icons">
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-eye"></i>
            </div>
            <div className="images">
              <img src={imgProduct1} alt="" />
            </div>
            <div className="content">
              <h3>organic food</h3>
              <div className="price">$24.58</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-eye"></i>
            </div>
            <div className="images">
              <img src={imgProduct2} alt="" />
            </div>
            <div className="content">
              <h3>organic food</h3>
              <div className="price">$24.58</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-eye"></i>
            </div>
            <div className="images">
              <img src={imgProduct3} alt="" />
            </div>
            <div className="content">
              <h3>organic food</h3>
              <div className="price">$24.58</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-eye"></i>
            </div>
            <div className="images">
              <img src={imgProduct4} alt="" />
            </div>
            <div className="content">
              <h3>organic food</h3>
              <div className="price">$24.58</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-eye"></i>
            </div>
            <div className="images">
              <img src={imgProduct5} alt="" />
            </div>
            <div className="content">
              <h3>organic food</h3>
              <div className="price">$24.58</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-eye"></i>
            </div>
            <div className="images">
              <img src={imgProduct6} alt="" />
            </div>
            <div className="content">
              <h3>organic food</h3>
              <div className="price">$24.58</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-eye"></i>
            </div>
            <div className="images">
              <img src={imgProduct7} alt="" />
            </div>
            <div className="content">
              <h3>organic food</h3>
              <div className="price">$24.58</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-eye"></i>
            </div>
            <div className="images">
              <img src={imgProduct8} alt="" />
            </div>
            <div className="content">
              <h3>organic food</h3>
              <div className="price">$24.58</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
