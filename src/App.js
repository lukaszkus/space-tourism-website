import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";

import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import NotFound from "./pages/NotFound/NotFound";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
