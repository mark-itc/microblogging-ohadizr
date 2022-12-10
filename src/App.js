import React from "react";
import "./App.css";
import { Routes, Route, useParams, Link } from "react-router-dom";
import NavBar from './componenets/NavBar'
import Profile from './Pages/Profile'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
