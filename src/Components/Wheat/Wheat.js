import React from "react";
import "./Wheat.css";
import { URL } from "../../constants";
import wheat1 from "../../assests/image/wheat-1.jpg";
import wheat2 from "../../assests/image/wheat-2.jpg";
import wheat3 from "../../assests/image/wheat-3.jpg";
import wheat4 from "../../assests/image/wheat-4.jpg";
import wheat5 from "../../assests/image/wheat-5.jpg";
import wheat6 from "../../assests/image/wheat-6.jpg";

export default function Wheat() {
  return (
    <div>
      <div className="heading">
        <h1>Wheat</h1>
        <p>
          <a href={URL.SHOPS}>
            Home{">> "}Shop{">> "}
          </a>
          Wheat
        </p>
      </div>
      <section className="wheats">
        <h1 className="title">
          organic <span> wheat</span> <a href={URL.FRUITS}>View all {">>"}</a>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={wheat1} alt="" />
            <div className="icons">
              <span>organic wheat</span>
            </div>
          </div>
          <div className="box">
            <img src={wheat2} alt="" />
            <div className="icons">
              <span>organic wheat</span>
            </div>
          </div>
          <div className="box">
            <img src={wheat3} alt="" />
            <div className="icons">
              <span>organic wheat</span>
            </div>
          </div>
          <div className="box">
            <img src={wheat4} alt="" />
            <div className="icons">
              <span>organic wheat</span>
            </div>
          </div>
          <div className="box">
            <img src={wheat5} alt="" />
            <div className="icons">
              <span>organic wheat</span>
            </div>
          </div>
          <div className="box">
            <img src={wheat6} alt="" />
            <div className="icons">
              <span>organic wheat</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
