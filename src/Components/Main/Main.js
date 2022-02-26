import React from "react";
import home1 from "../../assests/image/home-img-1.png";
import home2 from "../../assests/image/home-img-2.png";
import home3 from "../../assests/image/home-img-3.png";
import { Link } from "react-router-dom";
import { URL } from "../../constants";

import "./Main.css";

export default function Main() {
  let index = 0;
  const onNext = () => {
    let slides = document.querySelectorAll(".home .slides-container .slide");

    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  };

  const onPrev = () => {
    let slides = document.querySelectorAll(".home .slides-container .slide");
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
  };

  return (
    <section className="home">
      <div className="slides-container">
        <div className="slide active">
          <div className="content">
            <span>fresh and organic</span>
            <h3>upto 50% off</h3>
            <Link to={URL.HOME} className="btn">
              shop now
            </Link>
          </div>
          <div className="image">
            <img src={home1} alt="" />
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <span>fresh and organic</span>
            <h3>upto 50% off</h3>
            <Link to={URL.HOME} className="btn">
              shop now
            </Link>
          </div>
          <div className="image">
            <img src={home2} alt="" />
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <span>fresh and organic</span>
            <h3>upto 50% off</h3>
            <Link to={URL.HOME} className="btn">
              shop now
            </Link>
          </div>
          <div className="image">
            <img src={home3} alt="" />
          </div>
        </div>
      </div>
      <div
        id="next-slide"
        className="fas fa-angle-right"
        onClick={() => onPrev()}
      ></div>
      <div
        id="prev-slide"
        className="fas fa-angle-left"
        onClick={() => onNext()}
      ></div>
    </section>
  );
}
