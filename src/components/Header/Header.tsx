import { Link } from "react-router-dom";
import { CustomButton } from "../CustomButton/CustomButton";
import { headerBlock, headerContent } from "./style.css";
export const Header = () => {
  return (
    <div className={headerBlock}>
      <div className={headerContent}>
        <Link to="/">
          <h3>Some company</h3>
        </Link>
        <CustomButton />
      </div>
    </div>
  );
};
