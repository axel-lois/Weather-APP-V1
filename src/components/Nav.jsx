import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import NavCSS from "./Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className={NavCSS.nav}>
      <NavLink style={{textDecoration:'none'}} to="/Weather-App-V1/">
        <div className={NavCSS.logo}>
          <h5 className={NavCSS.nav_links}>Weather App - Home</h5>
        </div>
      </NavLink>
      <div className={NavCSS.about_container}>
      <NavLink style={{textDecoration:'none'}} to="/about">
        <span className={NavCSS.about_span}>About me</span>
      </NavLink>
      </div>
      <SearchBar onSearch={onSearch}></SearchBar>
    </nav>
  );
}

export default Nav;
