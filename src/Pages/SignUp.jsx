import React from "react";
import { useState, useContext,useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "@firebase/auth";
import { FirebaseConfigContext } from "../FirebaseConfigContext";
import "./SignInOut.css";
import { GoogleAuthProvider } from "firebase/auth";


export default function SingUp() {
  const { auth,authenticatedUser  } = useContext(
    FirebaseConfigContext
  );
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassWord, setRegisterPassword] = useState("");
  const [confirmationPassWord, setConfirmationPassWordPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");

  const provider = new GoogleAuthProvider();
  console.log(provider);
  const register = async () => {
    try {
      const authenticatedUser = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassWord
      );

      setError("");
  
    } catch (error) {
      setError(error.message);
    }
  };

async function updateNameAndPhoto() {
    await authenticatedUser.updateProfile({
    displayName: displayName,
    photoURL:photoURL
  });
  
}
  
  
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
    registerPassWord === confirmationPassWord
      ? register()
      : setError(
          "ERROR: Your password and confirmation password do not match."
        );
      updateNameAndPhoto() 
  }
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
      <div className="registerDiv">
        <h2>Register User</h2>
        <form className="registerDiv" onSubmit={handleSubmit}>
        <label>User Name</label>
          <input
            className="inputStandard"
            type="text"
            required
            placeholder="Enter full-name {first=> middle=>last}"
            onChange={(e) => {
              e.preventDefault();
              setDisplayName(e.target.value);
            }}
          />
          <label>set Profile Picture</label>
          <input
            className="inputStandard"
            type="image"
            placeholder="*optional*"
            onChange={(e) => {
              e.preventDefault();
              setDisplayName(e.target.value);
            }}
          />
          <label>Enter Email</label>
          <input
            className="inputStandard"
            type="email"
            required
            placeholder="Enter Email"
            onChange={(e) => {
              e.preventDefault();
              setRegisterEmail(e.target.value);
            }}
          />
          <label>Enter Password</label>
          <input
            className="inputStandard"
            type="password"
            required
            placeholder="Enter Password"
            onChange={(e) => {
              e.preventDefault();
              setRegisterPassword(e.target.value);
            }}
          />
          <label>Confirm Password</label>
          <input
            className="inputStandard"
            type="password"
            required
            placeholder="Confirm Password"
            onChange={(e) => {
              e.preventDefault();
              setConfirmationPassWordPassword(e.target.value);
            }}
          />
          <button className="buttonStandard" type="submit">
            Create User
          </button>
          <button 
          onClick={signInWithGoogle}
          className="buttonStandard" type="submit">
            sign with google
          </button>
          <div>
            <h4>{error ? error : null}</h4>
          </div>
        </form>
      </div>
    </div>
  );
}
