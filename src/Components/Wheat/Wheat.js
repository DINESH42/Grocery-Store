import React from "react";
import "./Wheat.css";
import { URL } from "../../constants";
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
    </div>
  );
}
