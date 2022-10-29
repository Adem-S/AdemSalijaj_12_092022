import React from "react";
import { Link } from "react-router-dom";
import yogaIcon from "../../Assets/yoga_icon.svg";
import swimmingIcon from "../../Assets/swimming_icon.svg";
import cyclingIcon from "../../Assets/cycling_icon.svg";
import bodybuildingIcon from "../../Assets/bodybuilding_icon.svg";
import IconBackground from "../../Components/IconBackground/IconBackground";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__nav">
        <Link to="/">
          <IconBackground src={yogaIcon} backgroundColor="white" />
        </Link>
        <Link to="/">
          <IconBackground src={swimmingIcon} backgroundColor="white" />
        </Link>
        <Link to="/">
          <IconBackground src={cyclingIcon} backgroundColor="white" />
        </Link>
        <Link to="/">
          <IconBackground src={bodybuildingIcon} backgroundColor="white" />
        </Link>
      </div>
      <p className="sidebar__copyright">Copiryght, SportSee 2020</p>
    </div>
  );
};

export default Sidebar;
