import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "test",
      location: "test loc",
    };
    console.log("constructor called");
  }
  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/Cybage-Mahesh");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   name: json.name,
    //   location: json.location,
    //   avatar_url: json.avatar_url,
    // });
    this.timer = setInterval(() => {
      console.log("setInterval called");
    }, 1000);
    console.log("componentDidMount called");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount called");
    clearInterval(this.timer);
  }
  render() {
    console.log("render called");
    const { name, location, avatar_url } = this.state;
    return (
      <div className="user-class">
        <h1>User class component</h1>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Location: {location}s</h2>
      </div>
    );
  }
}
export default UserClass;
