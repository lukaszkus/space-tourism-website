import * as React from "react";
import { Link } from "react-router-dom";

export default function Navigation(){
  return (
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="destination">Destination</Link>
          </li>
          <li>
            <Link to="crew">Crew</Link>
          </li>
          <li>
            <Link to="technology">Technology</Link>
          </li>
        </ul>
    </nav>
  )
}