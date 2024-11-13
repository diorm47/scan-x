import React from "react";
import "./navbar.css";
import MainBtn from "../main-btn/main-btn";
import { ReactComponent as Logo } from "../../assets/logo.svg";

function Navbar({ handleScroll }) {
  return (
    <nav>
      <div className="nav_logo">
        <Logo />
        <h1>Scan-x</h1>
      </div>

      <div className="nav_menu">
        <p onClick={() => handleScroll("section1")}>Инструменты</p>
        <p onClick={() => handleScroll("section2")}>Возможности</p>
        <p onClick={() => handleScroll("section3")}>Дорожная карта</p>
      </div>
      <MainBtn text="Попробовать" />
    </nav>
  );
}

export default Navbar;
