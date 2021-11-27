import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './styles/main.scss';

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import NotFound from "./pages/NotFound";

import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="container">
      <Navigation />
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
