import React, { useEffect } from "react";
import "./navbar.css";
import MainBtn from "../main-btn/main-btn";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar({ handleScroll }) {
  useEffect(() => {
    AOS.init({
      duration: 1700,
    });
  }, []);

  return (
    <nav>
      <div className="nav_logo" data-aos="fade-right">
        <Logo />
        <h1>Scan-x</h1>
      </div>

      <div className="nav_menu" data-aos="fade-down">
        <p onClick={() => handleScroll("section1")}>Инструменты</p>
        <p onClick={() => handleScroll("section2")}>Возможности</p>
        <p onClick={() => handleScroll("section3")}>Дорожная карта</p>
      </div>
      <div data-aos="fade-left">
        <MainBtn text="Попробовать" />
      </div>
    </nav>
  );
}

export default Navbar;
