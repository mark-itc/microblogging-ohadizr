import React from 'react';
import "./App.css";
import { Routes, Route, useParams, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./Pages/Profile.jsx";
import Home from './Pages/Home.jsx'

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
