import * as React from "react";
import {ReactComponent as Hamburger} from '../assets/shared/icon-hamburger.svg';

import "./MobileBtn.scss";

export default function MobileBtn({ toggle }) {
  return (
    <Hamburger onClick={toggle} className="hamburger"/>
  );
}
