import * as React from "react";
import { NavLink as Link } from "react-router-dom";

import './Navigation.scss';

export default function Navigation(){
  return (
    <nav className="nav">
        <ul>
          <li>
            <Link to="/" className="nav__link" activeClassName="active"><span>00</span>Home</Link>
          </li>
          <li>
            <Link to="destination" className="nav__link" activeClassName="active"><span>01</span>Destination</Link>
          </li>
          <li>
            <Link to="crew" className="nav__link" activeClassName="active"><span>02</span>Crew</Link>
          </li>
          <li>
            <Link to="technology" className="nav__link" activeClassName="active"><span>03</span>Technology</Link>
          </li>
        </ul>
    </nav>
  )
}