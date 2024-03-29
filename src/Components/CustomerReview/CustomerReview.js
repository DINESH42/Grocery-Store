import React from "react";
import "./CustomerReview.css";
import customerInfo1 from "../../assests/image/icon-1.png";
import customerInfo2 from "../../assests/image/icon-2.png";
import customerInfo3 from "../../assests/image/icon-3.png";
import user1 from "../../assests/image/pic-1.png";
import user2 from "../../assests/image/pic-2.png";
import user3 from "../../assests/image/pic-3.png";
import user4 from "../../assests/image/pic-4.png";
import user5 from "../../assests/image/pic-5.png";
import user6 from "../../assests/image/pic-6.png";
import { URL } from "../../constants";
import { Link } from "react-router-dom";

export default function CustomerReview() {
  return (
    <div>
      <div className="heading">
        <h1>Customer's review</h1>
        <p>
          <Link to={URL.HOME}>Home {">>"}</Link>review
        </p>
      </div>
      <section className="info-container">
        <div className="info">
          <img src={customerInfo1} alt="" />
          <div className="content">
            <h3>fast delivery</h3>
            <span>within 30 mins</span>
          </div>
        </div>
        <div className="info">
          <img src={customerInfo2} alt="" />
          <div className="content">
            <h3>24 / 7 available</h3>
            <span>call us anytime</span>
          </div>
        </div>
        <div className="info">
          <img src={customerInfo3} alt="" />
          <div className="content">
            <h3>easy paymen</h3>
            <span>cash or credits</span>
          </div>
        </div>
      </section>
      <section className="review">
        <div className="box">
          <div className="user">
            <img src={user1} alt="" />
            <div className="info">
              <h3>User name</h3>
              <span>user review</span>
            </div>
          </div>
          <p>
            This is the best local independently owned health food store in
            Santa Cruz county. They will have the best prices and you will be
            able to find the most unique hard to find items here as well. You
            will feel much better supporting a local company
          </p>
        </div>
        <div className="box">
          <div className="user">
            <img src={user2} alt="" />
            <div className="info">
              <h3>User name</h3>
              <span>user review</span>
            </div>
          </div>
          <p>
            This is the best local independently owned health food store in
            Santa Cruz county. They will have the best prices and you will be
            able to find the most unique hard to find items here as well. You
            will feel much better supporting a local company
          </p>
        </div>
        <div className="box">
          <div className="user">
            <img src={user3} alt="" />
            <div className="info">
              <h3>User name</h3>
              <span>user review</span>
            </div>
          </div>
          <p>
            This is the best local independently owned health food store in
            Santa Cruz county. They will have the best prices and you will be
            able to find the most unique hard to find items here as well. You
            will feel much better supporting a local company
          </p>
        </div>
        <div className="box">
          <div className="user">
            <img src={user4} alt="" />
            <div className="info">
              <h3>User name</h3>
              <span>user review</span>
            </div>
          </div>
          <p>
            This is the best local independently owned health food store in
            Santa Cruz county. They will have the best prices and you will be
            able to find the most unique hard to find items here as well. You
            will feel much better supporting a local company
          </p>
        </div>
        <div className="box">
          <div className="user">
            <img src={user5} alt="" />
            <div className="info">
              <h3>User name</h3>
              <span>user review</span>
            </div>
          </div>
          <p>
            This is the best local independently owned health food store in
            Santa Cruz county. They will have the best prices and you will be
            able to find the most unique hard to find items here as well. You
            will feel much better supporting a local company
          </p>
        </div>
        <div className="box">
          <div className="user">
            <img src={user6} alt="" />
            <div className="info">
              <h3>User name</h3>
              <span>user review</span>
            </div>
          </div>
          <p>
            This is the best local independently owned health food store in
            Santa Cruz county. They will have the best prices and you will be
            able to find the most unique hard to find items here as well. You
            will feel much better supporting a local company
          </p>
        </div>
      </section>
    </div>
  );
}
