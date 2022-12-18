import React from "react";
import "../componenets/NavBar.css";
import { useNavigate } from "react-router-dom";
import { FirebaseConfigContext } from "../FirebaseConfigContext";
import { useContext} from "react";
import {
  signOut,
  onAuthStateChanged,
} from "@firebase/auth";
export default function NavBar() {
  const navigate = useNavigate();
  const { auth, authenticatedUser, setAuthenticatedUser } = useContext(
    FirebaseConfigContext
  );

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("currentUser1",auth.currentUser,"user",authenticatedUser);
    } catch (error) {
      console.log(error.message);
      return
    }
  };
    onAuthStateChanged(auth, (currentUser) => {
      setAuthenticatedUser(currentUser);
    });


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
          </div>
          <div className="NavBarLeftSide">
            {authenticatedUser ? (
  
              <>
              <button
                onClick={() => {
                  navigate("/Profile");
                }}
                className="navButton"
              >
                Profile
              </button>
              <button onClick={()=>{
                  logout()
                  setAuthenticatedUser({})
                  }}>signOut</button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate("/SignUp");
                  }}
                  className="navButton"
                >
                  Sign Up
                </button>
                <button
                  onClick={() => {
                    navigate("/SignIn");
                  }}
                  className="navButton"
                >
                  Sign In
                </button>
              </>
            )}
          </div>

      </nav>
    </>
  );
}
