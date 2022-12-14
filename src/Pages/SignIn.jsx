import React from "react";
import { useState, useContext } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup
} from "@firebase/auth";
import { FirebaseConfigContext } from "../FirebaseConfigContext";
import "./SignInOut.css";
import { GoogleAuthProvider } from "firebase/auth";
export default function SignIn() {
  const { auth } = useContext(
    FirebaseConfigContext
  );
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [error, setError] = useState("");
  const login = async () => {
    try {
      const authenticatedUser = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("currentUser1", auth.currentUser, "user", authenticatedUser);
      setError("");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };
  const provider = new GoogleAuthProvider();
  const signInWithGoogle =async()=>{
    try {
     return signInWithPopup(auth,provider).then((result) =>{
        const name = result.user.displayName
        const email = result.user.email
        const profilePic = result.user.photoURL
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("profilePic",profilePic)
      })
    } catch (error) {
      console.log(error);
    }
 

  }
  return (
    <div className="signInContainer">
      <div className="logInDiv">
        <h2>Login User</h2>
        <label>Enter Email</label>
        <input
          className="inputStandard"
          type="email"
          placeholder="Enter Email"
          required
          onChange={(e) => {
            e.preventDefault();
            setloginEmail(e.target.value);
          }}
        ></input>
        <label>Enter Password</label>
        <input
        className="inputStandard"
          type="password"
          required
          placeholder="Enter Password"
          onChange={(e) => {
            e.preventDefault();
            setloginPassword(e.target.value);
          }}
        ></input>
        <button 
        className="buttonStandard"
        onClick={login}>Login User</button>
                  <button 
          onClick={signInWithGoogle}
          className="buttonStandard" type="submit">
            Login with google
          </button>
        <div>
          <h4>{error ? error : null}</h4>
        </div>
      </div>
    </div>
  );
}
