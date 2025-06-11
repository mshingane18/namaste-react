import React from "react";
import ReactDOM from "react-dom/client";



const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is my first component in ReactJS"
);

const jsxHeading = <h1 id="heading" className="heading">Namste React using JSX</h1>
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);