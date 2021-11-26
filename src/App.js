import * as React from "react";
import { Routes, Route, Link} from "react-router-dom";
import './styles/main.scss';

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="container">
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
