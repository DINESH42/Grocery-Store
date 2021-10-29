import React from "react";
import "./Banner.css";
import banner1 from "../../assests/image/banner-1.jpg";
import banner2 from "../../assests/image/banner-2.jpg";
import banner3 from "../../assests/image/banner-3.jpg";

export default function Banner() {
  return (
    <section className="banner-container">
      <div className="banner">
        <img src={banner1} alt="" />
        <div className="content">
          <span>limited sales</span>
          <h3>upto 50% off</h3>
          <a href="/" className="btn">
            shop now
          </a>
        </div>
      </div>
      <div className="banner">
        <img src={banner2} alt="" />
        <div className="content">
          <span>limited sales</span>
          <h3>upto 50% off</h3>
          <a href="/" className="btn">
            shop now
          </a>
        </div>
      </div>
      <div className="banner">
        <img src={banner3} alt="" />
        <div className="content">
          <span>limited sales</span>
          <h3>upto 50% off</h3>
          <a href="/" className="btn">
            shop now
          </a>
        </div>
      </div>
    </section>
  );
}
