import { useState } from "react";
import { Logo_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}>
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
