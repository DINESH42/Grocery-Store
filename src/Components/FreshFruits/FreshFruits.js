import React from "react";
import "./FreshFruits.css";
import { URL } from "../../constants";
import Fruit1 from "../../assests/image/fruit-1.jpg";
import Fruit2 from "../../assests/image/fruit-2.jpg";
import Fruit3 from "../../assests/image/fruit-3.jpg";
import Fruit4 from "../../assests/image/fruit-4.jpg";
import Fruit5 from "../../assests/image/fruit-5.jpg";
import Fruit6 from "../../assests/image/fruit-6.jpg";

export default function FreshFruits() {
  return (
    <div>
      <div className="heading">
        <h1>Fresh fruits</h1>
        <p>
          <a href={URL.SHOPS}>
            Home{">> "}Shop{">> "}
          </a>
          Fresh Fruits
        </p>
      </div>
      <section className="fruits">
        <h1 className="title">
          Fresh <span>Fruits</span> <a href={URL.FRUITS}>View all {">>"}</a>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={Fruit1} alt="" />
            <div className="icons">
              <span>Fresh banana</span>
            </div>
          </div>
          <div className="box">
            <img src={Fruit2} alt="" />
            <div className="icons">
              <span>Fresh apple</span>
            </div>
          </div>
          <div className="box">
            <img src={Fruit3} alt="" />
            <div className="icons">
              <span>Fresh mango</span>
            </div>
          </div>
          <div className="box">
            <img src={Fruit4} alt="" />
            <div className="icons">
              <span>Fresh Grapes</span>
            </div>
          </div>
          <div className="box">
            <img src={Fruit5} alt="" />
            <div className="icons">
              <span>Fresh Lychee</span>
            </div>
          </div>
          <div className="box">
            <img src={Fruit6} alt="" />
            <div className="icons">
              <span>Fresh Lychee</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
