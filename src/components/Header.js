import * as React from "react";

import "./Header.scss";

import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <button className="mobile">
        <span className="hidden">Menu</span>
      </button>
      <Navigation />
    </header>
  );
}
