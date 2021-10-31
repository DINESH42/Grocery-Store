import React from "react";
import "./Meat.css";
import { URL } from "../../constants";
export default function Meat() {
  return (
    <div>
      <div className="heading">
        <h1>Fresh Meat</h1>
        <p>
          <a href={URL.SHOPS}>
            Home{">> "}Shop{">> "}
          </a>
          Fresh Meat
        </p>
      </div>
    </div>
  );
}
