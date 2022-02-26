import React from "react";
import "./Vegitables.css";
import { URL } from "../../constants";
import vegitable1 from "../../assests/image/vegitable-1.jpg";
import vegitable2 from "../../assests/image/vegitable-2.jpg";
import vegitable3 from "../../assests/image/vegitable-3.jpg";
import vegitable4 from "../../assests/image/vegitable-4.jpg";
import vegitable5 from "../../assests/image/vegitable-5.jpg";
import vegitable6 from "../../assests/image/vegitable-6.jpg";
import { Link } from "react-router-dom";

export default function Vegitables() {
  return (
    <div>
      <div className="heading">
        <h1>Fresh fruits</h1>
        <p>
          <Link to={URL.SHOPS}>
            Home{">> "}Shop{">> "}
          </Link>
          Vegitables
        </p>
      </div>
      <section className="vegitables">
        <h1 className="title">
          Fresh <span>Vegitables</span>{" "}
          <Link to={URL.FRUITS}>View all {">>"}</Link>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={vegitable1} alt="" />
            <div className="icons">
              <span>Fresh vegitable</span>
            </div>
          </div>
          <div className="box">
            <img src={vegitable2} alt="" />
            <div className="icons">
              <span>Fresh vegitable</span>
            </div>
          </div>
          <div className="box">
            <img src={vegitable3} alt="" />
            <div className="icons">
              <span>Fresh vegitable</span>
            </div>
          </div>
          <div className="box">
            <img src={vegitable4} alt="" />
            <div className="icons">
              <span>Fresh vegitable</span>
            </div>
          </div>
          <div className="box">
            <img src={vegitable5} alt="" />
            <div className="icons">
              <span>Fresh vegitable</span>
            </div>
          </div>
          <div className="box">
            <img src={vegitable6} alt="" />
            <div className="icons">
              <span>Fresh vegitable</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
