import React from "react";
import "./main-btn.css"

function MainBtn({text}) {
  return (
    <a href="https://t.me/scanxio_bot">
      <button className="main_btn">{text}</button>
    </a>
  );
}

export default MainBtn;
