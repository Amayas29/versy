import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";

// function insertHTML(text) {
//   var sel, range;
//   if (window.getSelection && (sel = window.getSelection()).rangeCount) {
//     range = sel.getRangeAt(0);
//     range.collapse(true);
//     var span = document.createElement("span");
//     span.appendChild(document.createTextNode(text));
//     range.insertNode(span);

//     // Move the caret immediately after the inserted span
//     range.setStartAfter(span);
//     range.collapse(true);
//     sel.removeAllRanges();
//     sel.addRange(range);
//   }
// }

// document.onpaste = (e) => {
//   e.preventDefault();
//   const text = e.clipboardData.getData("text/plain");
//   insertHTML(text);
// };

ReactDOM.render(<App />, document.getElementById("root"));
