import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";

document.onpaste = (e) => {
  e.preventDefault();
  return false;
};

ReactDOM.render(<App />, document.getElementById("root"));
