import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SolarLanding from "./SolarLanding"; 
import WorthIt from "./WorthIt"; 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SolarLanding />} />
        <Route path="/WorthIt" element={<WorthIt />} />
      </Routes>
    </Router>
  );
}