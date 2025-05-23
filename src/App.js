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

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home setSearchTerm={setSearchTerm}/>} />
          <Route path="/card" element={<Card  setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/expansions" element={<Expansions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
