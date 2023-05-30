import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const currentDate = new Date();
const year = currentDate.getFullYear();
var ran = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <div>
      <p>Created by {name}</p>
      <p>Copyright {year}</p>
    </div>
    <div>
      <h1>Dev bothers sponsers</h1>
      <h2> Your lucky number is {ran} </h2>
      <ul>
        <li>Bill gates</li>
        <li>zukker {ran} bhaiya</li>
        <li>sundrendar pichai</li>
      </ul>
    </div>
  </div>,
  document.getElementById("root")
);
