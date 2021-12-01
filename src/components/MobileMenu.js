import React from "react";
import { NavLink as Link } from "react-router-dom";

import { ReactComponent as Close } from "../assets/shared/icon-close.svg";

import "./MobileMenu.scss";

export default function MobileMenu({ isOpen, toggle }) {
  const menuVisibility = isOpen
    ? { opacity: "100%", top: 0 }
    : { opacity: 0, right: "-100%" };

  return (
    <nav className="mobile" onClick={toggle} style={menuVisibility}>
      <Close className="mobile-close" />
      <ul>
        <li>
          <Link to="/" className="mobile__link" activeclassname="active">
            <span>00</span>Home
          </Link>
        </li>
        <li>
          <Link
            to="destination"
            className="mobile__link"
            activeclassname="active">
            <span>01</span>Destination
          </Link>
        </li>
        <li>
          <Link to="crew" className="mobile__link" activeclassname="active">
            <span>02</span>Crew
          </Link>
        </li>
        <li>
          <Link
            to="technology"
            className="mobile__link"
            activeclassname="active">
            <span>03</span>Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
}
