import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePublic from "./pages/homePublic/HomePublic";
import Login from "./pages/login/Login";
import NavBar from "./components/navBar/NavBar";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<HomePublic />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <div>
        <h1>footer</h1>
      </div>
    </Router>
  );
}

export default App;
