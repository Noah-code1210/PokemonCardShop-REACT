import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Buy from "./pages/Buy";
import Cart from "./pages/Cart";
import Nav from "./components/Nav";
import Cards from "./pages/Cards";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
