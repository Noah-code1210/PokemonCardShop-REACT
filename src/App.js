import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Buy from "./pages/Buy";
import Nav from "./components/Nav";
import Featured from "./pages/Featured";
import Expansions from "./pages/Expansions";
import Cards from "./pages/Cards";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card  />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/cards/:id" element={<Cards />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/expansions" element={<Expansions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
