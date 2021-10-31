import React from "react";
import "./About.css";
import aboutimg from "../../assests/image/about-img.jpg";
import imggallery1 from "../../assests/image/gallery-img-1.jpg";
import imggallery2 from "../../assests/image/gallery-img-2.jpg";
import imggallery3 from "../../assests/image/gallery-img-3.jpg";
import imggallery4 from "../../assests/image/gallery-img-4.jpg";
import imggallery5 from "../../assests/image/gallery-img-5.jpg";
import imggallery6 from "../../assests/image/gallery-img-6.jpg";
import { URL } from "../../constants";

export default function About() {
  return (
    <div>
      <div className="heading">
        <h1>about us</h1>
        <p>
          <a href={URL.HOMW}>Home {">>"}</a>about
        </p>
      </div>
      <section className="about">
        <div className="image">
          <img src={aboutimg} alt="" />
        </div>
        <div className="content">
          <span>welcome to our shop</span>
          <h3>fresh and organic groceries</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel
            sequi nostrum quae nobis non quaerat nisi voluptatibus recusandae
            reprehenderit tempore eligendi, eum quibusdam perferendis dicta,
            incidunt dolores nemo ex.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            cumque molestiae blanditiis deleniti aspernatur, ab tempora quisquam
            sapiente commodi hic.
          </p>
          <a href={URL.ABOUT} className="btn">
            read more
          </a>
        </div>
      </section>
      <section className="gallery">
        <h1 className="title">
          our <span>gallery</span> <a href={URL.SHOPS}>View all {">>"}</a>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={imggallery1} alt="" />
            <div className="icons">
              <i className="fas fa-eye"></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-share-alt"></i>
            </div>
          </div>
          <div className="box">
            <img src={imggallery2} alt="" />
            <div className="icons">
              <i className="fas fa-eye"></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-share-alt"></i>
            </div>
          </div>
          <div className="box">
            <img src={imggallery3} alt="" />
            <div className="icons">
              <i className="fas fa-eye"></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-share-alt"></i>
            </div>
          </div>
          <div className="box">
            <img src={imggallery4} alt="" />
            <div className="icons">
              <i className="fas fa-eye"></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-share-alt"></i>
            </div>
          </div>
          <div className="box">
            <img src={imggallery5} alt="" />
            <div className="icons">
              <i className="fas fa-eye"></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-share-alt"></i>
            </div>
          </div>
          <div className="box">
            <img src={imggallery6} alt="" />
            <div className="icons">
              <i className="fas fa-eye"></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-share-alt"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
