import React, { useContext } from "react";
import "./Spices.css";
import { URL } from "../../constants";
import spices1 from "../../assests/image/spices-1.jpg";
import spices2 from "../../assests/image/spices-2.jpg";
import spices3 from "../../assests/image/spices-3.jpg";
import spices4 from "../../assests/image/spices-4.jpg";
import spices5 from "../../assests/image/spices-5.jpg";
import spices6 from "../../assests/image/spices-6.jpg";
import { AppContext } from "../ContextFile/Context2";

export default function Spices(props) {
  const { fname } = useContext(AppContext);

  console.log("fname :", fname);

  return (
    <div>
      <div className="heading">
        <h1>organic spices</h1>
        <p>
          <a href={URL.SHOPS}>
            Home{">> "}Shop{">> "}
          </a>
          organic spices
        </p>
      </div>
      <section className="spices">
        <h1 className="title">
          organic <span> spices</span> <a href={URL.SPICES}>View all {">>"}</a>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={spices1} alt="" />
            <div className="icons">
              <span>organic spices</span>
            </div>
          </div>
          <div className="box">
            <img src={spices2} alt="" />
            <div className="icons">
              <span>organic spices</span>
            </div>
          </div>
          <div className="box">
            <img src={spices3} alt="" />
            <div className="icons">
              <span>organic spices</span>
            </div>
          </div>
          <div className="box">
            <img src={spices4} alt="" />
            <div className="icons">
              <span>organic spices</span>
            </div>
          </div>
          <div className="box">
            <img src={spices5} alt="" />
            <div className="icons">
              <span>organic spices</span>
            </div>
          </div>
          <div className="box">
            <img src={spices6} alt="" />
            <div className="icons">
              <span>organic spices</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
