import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <Header />
      {/* <div className="space"></div> */}
      <Main />
      <Footer />
    </div>
  );
}
