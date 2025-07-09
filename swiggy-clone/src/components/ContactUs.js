import { useContext } from "react";
import UserContext from "../utils/UserContext";
const ContactUs = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>Contact us</h1>
      <h4>test@gmail.com</h4>
      <h1>{loggedInUser}</h1>
    </div>
  );
};

export default ContactUs;
