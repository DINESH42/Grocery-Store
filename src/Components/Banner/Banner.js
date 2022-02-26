import React from "react";
import "./Banner.css";
import banner1 from "../../assests/image/banner-1.jpg";
import banner2 from "../../assests/image/banner-2.jpg";
import banner3 from "../../assests/image/banner-3.jpg";
import banners from "./Banner.json";
import { URL } from "../../constants";
import { Link } from "react-router-dom";

export default function Banner() {
  console.log("banners :", banners.Banner);

  return (
    <section className="banner-container">
      <div className="banner">
        <img src={banner1} alt="" />
        <div className="content">
          <span>limited sales</span>
          <h3>upto 50% off</h3>
          <Link to={URL.HOME} className="btn">
            shop now
          </Link>
        </div>
      </div>
      <div className="banner">
        <img src={banner2} alt="" />
        <div className="content">
          <span>limited sales</span>
          <h3>upto 50% off</h3>
          <Link to={URL.HOME} className="btn">
            shop now
          </Link>
        </div>
      </div>
      <div className="banner">
        <img src={banner3} alt="" />
        <div className="content">
          <span>limited sales</span>
          <h3>upto 50% off</h3>
          <Link to={URL.HOME} className="btn">
            shop now
          </Link>
        </div>
      </div>
    </section>
  );
}
