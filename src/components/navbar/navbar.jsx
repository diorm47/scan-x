import React from "react";
import "./navbar.css";
import MainBtn from "../main-btn/main-btn";

function Navbar() {
  return (
    <nav>
      <div className="nav_logo">
        <h1>Scan-x</h1>
      </div>

      <div className="nav_menu">
        <p>Инструменты</p>
        <p>Возможности</p>
        <p>Дорожная карта</p>
      </div>
      <MainBtn text='Попробовать' />
    </nav>
  );
}

export default Navbar;
