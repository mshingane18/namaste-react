import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  useEffect(() => {
    console.log("useEffect called");
    const timer = setInterval(() => {
      console.log("setInterval called");
    }, 1000);

    return () => {
      console.log("useEffect cleanup called");
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="user">
      <h1>User Component</h1>
      <h2>Name: {name}</h2>
      <h2>Location: {location}</h2>
    </div>
  );
};

export default User;
