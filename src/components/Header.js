import * as React from "react";

import "./Header.scss";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import MobileBtn from "./MobileBtn";
import Navigation from "./Navigation";

export default function Header({ isOpen, toggle }) {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <MobileBtn toggle={toggle} />
      <MobileMenu isOpen={isOpen} toggle={toggle} />
    </header>
  );
}
