import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor() {
    super();
    console.log("parent constructor called");
  }

  componentDidMount() {
    console.log("parent did mount called");
  }
  componentDidUpdate() {
    console.log(this.props.name + "child componentDidUpdate called");
  }
  componentWillUnmount() {
    console.log(this.props.name + "child componentWillUnmount called");
  }
  render() {
    console.log("parent render called");
    return (
      <div className="about-container">
        <h1>About page</h1>
        <User name={"first"} location={"Pune(class)"} />
      </div>
    );
  }
}

export default About;
