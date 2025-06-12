import React from "react";
import ReactDOM from "react-dom/client";

const head = (<h1>Hello</h1>)

const Title = () =>  (
    <h1 className="title" id="title">ReactJS</h1>
  );

const HeadingComponent = ()=> (
  <div id="container">
    {Title()}
    <Title />
    <Title> </Title>
      <h1 id="heading">This is my first component in ReactJS</h1>
  </div>
  );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);