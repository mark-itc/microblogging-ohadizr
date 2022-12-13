import React from "react";
import '../componenets/NavBar.css'
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="NavBarContainer">
      <div className="NavBarLeftSide">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="navButton"
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate("/Profile");
            }}
            className="navButton"
          >
            Profile
          </button>
          </div>
          <div className="NavBarRightSide">
          <button
            onClick={() => {
              navigate("/SignUp");
            }}
            className="navButton"
          >
            SignUp
          </button>
          <button
            onClick={() => {
              navigate("/SignIn");
            }}
            className="navButton"
          >
            SignIn
          </button>


          </div>
      </nav>
    </>
  );
}
