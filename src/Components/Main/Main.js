import React from "react";
import home1 from "../../assests/image/home-img-1.png";
import home2 from "../../assests/image/home-img-2.png";
import home3 from "../../assests/image/home-img-3.png";

import "./Main.css";

export default function Main() {
  return (
    <section className="home">
      <div className="slides-container">
        <div className="slide active">
          <div className="content">
            <span>fresh and organic</span>
            <h3>upto 50% off</h3>
            <a href="/" className="btn">
              shop now
            </a>
          </div>
          <div className="image">
            <img src={home1} alt="" />
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <span>fresh and organic</span>
            <h3>upto 50% off</h3>
            <a href="/" className="btn">
              shop now
            </a>
          </div>
          <div className="image">
            <img src={home2} alt="" />
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <span>fresh and organic</span>
            <h3>upto 50% off</h3>
            <a href="/" className="btn">
              shop now
            </a>
          </div>
          <div className="image">
            <img src={home3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
