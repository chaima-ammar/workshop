import React from "react";
import logo from "../images/logosimplon.png";
import "./Navbtn.css";
function NavBtn() {
  return (
    <button class="navbtn">
      <img src={logo} alt="btn" width="50px" />
    </button>
  );
}
export default NavBtn;
