import { Link } from "react-router-dom";
import { customButton } from "./style.css";
export const CustomButton = () => {
  return (
    <Link to="contact">
      <button className={customButton}>Contact us</button>
    </Link>
  );
};
