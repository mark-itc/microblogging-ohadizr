import React from "react";
import { useState, useContext} from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "@firebase/auth";
import { FirebaseConfigContext } from "../FirebaseConfigContext";
import "./SignInOut.css";
import { GoogleAuthProvider } from "firebase/auth";
import  GoogleIcon from './art/google.png'




export default function SingUp() {
  let url=window.location.href
  const lastPartOfUrl= url.substring(url.lastIndexOf('/') + 1)
 
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

  const register = async () => {
    try {
      const authenticatedUser = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassWord
      );
      localStorage.setItem("displayName",displayName)
      localStorage.setItem("email",registerEmail)
      // localStorage.setItem("profilePic",profilePic)
      setError("");
      
    } catch (error) {
      setError(error.message);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    registerPassWord === confirmationPassWord
      ? register()
      : setError(
          "ERROR: Your password and confirmation password do not match."
        );
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
    <>
    {/* <div className={lastPartOfUrl==="SignUp"?"signInContainer":null}> */}
      {/* <div className="registerDiv"> */}
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
          <label>Profile Picture</label>
          <input
            className="inputStandard"
            type="file"
            placeholder="Enter Profile Picture URL"
            onChange={(e) => {
              e.preventDefault();
              setPhotoURL(e.target.value);
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
            <div className="submitOptions">         
          <button className="buttonStandard" type="submit">
            Create User
          </button>
          <button 
          onClick={signInWithGoogle}
           type="submit"
           className="iconButton">
          <img className="googleIcon" src={GoogleIcon}/>
          </button>
        </div> 
          <div>
            <h4>{error ? error : null}</h4>
          </div>
        </form>
      {/* </div> */}
    {/* </div> */}
    </>
  );
}
