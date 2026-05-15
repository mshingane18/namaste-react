import { useContext, useState } from "react";
import { Logo_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import CartContext from "../utils/CartContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const { itemCount  } = useContext(CartContext);

  return (
    <div className="flex justify-between bg-green-50 shadow-md">
      <div className="border-green-300">
        <img className="w-56" src={Logo_URL} alt="logo" />
      </div>
      <div className="flex">
        <ul className="flex items-center">
          <li className="mx-4 text-blue-800">
            Status:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="mx-4 text-blue-800">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 text-blue-800">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-4 text-blue-800">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-4 text-blue-800">
            <Link to="/grocery">Grocery Store</Link>
          </li>
          <li className="mx-4 text-blue-800">
            <Link to="/cart">Cart({itemCount})</Link>
          </li>
          <li className="mx-4">
            <button
              className="bg-blue-500 px-2 py-1 rounded-sm cursor-pointer hover:bg-blue-600"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="mx-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
