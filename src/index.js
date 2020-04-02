import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const products = [
  {
    name: "Red Valvet Cake",
    price: 35000,
    active: true,
  },
  {
    name: "Cheese vol au vent",
    price: 70000,
    active: true,
  },
  {
    name: "Chocolate Truffle Pie",
    price: 70000,
    active: true,
  },
  {
    name: "Cherry Chocolate Cake",
    price: 35000,
    active: true,
  },
  {
    name: "Banana Chocolate Cake",
    price: 30000,
    active: false,
  },
  {
    name: "Pudding with fruit of the season",
    price: 80000,
    active: false,
  },
];

ReactDOM.render(<App products={products} />, document.getElementById("root"));