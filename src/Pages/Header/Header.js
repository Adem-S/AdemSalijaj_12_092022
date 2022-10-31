import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import "./Header.css";

/**
 * Component for showing Header
 *
 * @component
 */
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
      </div>
      <div className="header__nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/">Profil</NavLink>
        <NavLink to="/">Réglage</NavLink>
        <NavLink to="/">Communauté</NavLink>
      </div>
    </div>
  );
};

export default Header;
