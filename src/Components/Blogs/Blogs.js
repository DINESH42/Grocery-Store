import React from "react";
import "./Blogs.css";
import blogs1 from "../../assests/image/blog-1.jpg";
import blogs2 from "../../assests/image/blog-2.jpg";
import blogs3 from "../../assests/image/blog-3.jpg";
import blogs4 from "../../assests/image/blog-4.jpg";
import blogs5 from "../../assests/image/blog-5.jpg";
import blogs6 from "../../assests/image/blog-6.jpg";
import { URL } from "../../constants";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <div>
      <div className="heading">
        <h1>our Blogs</h1>
        <p>
          <Link to={URL.HOME}>Home{">>"}</Link>blogs
        </p>
      </div>
      <section className="blogs">
        <h1 className="title">
          our <span>blogs</span> <Link to={URL.SHOPS}>View all {">>"}</Link>
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={blogs1} alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <Link to={URL.BLOGS}>
                  <i className="fas fa-calendar"></i>21st May,2021
                </Link>
                <Link to={URL.BLOGS}>
                  <i className="fas fa-user"></i>User Name
                </Link>
              </div>
              <h3>blogs title goes here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to={URL.BLOGS} className="btn">
                read more
              </Link>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={blogs2} alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <Link to={URL.BLOGS}>
                  <i className="fas fa-calendar"></i>21st May,2021
                </Link>
                <Link to={URL.BLOGS}>
                  <i className="fas fa-user"></i>User Name
                </Link>
              </div>
              <h3>blogs title goes here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to={URL.BLOGS} className="btn">
                read more
              </Link>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={blogs3} alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <Link to={URL.BLOGS}>
                  <i className="fas fa-calendar"></i>21st May,2021
                </Link>
                <Link to={URL.BLOGS}>
                  <i className="fas fa-user"></i>User Name
                </Link>
              </div>
              <h3>blogs title goes here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to={URL.BLOGS} className="btn">
                read more
              </Link>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={blogs4} alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <Link to={URL.BLOGS}>
                  <i className="fas fa-calendar"></i>21st May,2021
                </Link>
                <Link to={URL.BLOGS}>
                  <i className="fas fa-user"></i>User Name
                </Link>
              </div>
              <h3>blogs title goes here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to={URL.BLOGS} className="btn">
                read more
              </Link>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={blogs5} alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <Link to={URL.BLOGS}>
                  <i className="fas fa-calendar"></i>21st May,2021
                </Link>
                <Link to={URL.BLOGS}>
                  <i className="fas fa-user"></i>User Name
                </Link>
              </div>
              <h3>blogs title goes here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to={URL.BLOGS} className="btn">
                read more
              </Link>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={blogs6} alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <Link to={URL.BLOGS}>
                  <i className="fas fa-calendar"></i>21st May,2021
                </Link>
                <Link to={URL.BLOGS}>
                  <i className="fas fa-user"></i>User Name
                </Link>
              </div>
              <h3>blogs title goes here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to={URL.BLOGS} className="btn">
                read more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
