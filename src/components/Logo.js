import * as React from "react";

import './Logo.scss';
import logo from "../assets/shared/logo.svg";


export default function Logo() {
  return (
    <div className="logo">
        <img src={logo} alt="Space Tourism logo"></img>
    </div>
  );
}