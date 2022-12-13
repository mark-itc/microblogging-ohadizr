import React from "react";
import { useState,useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,

} from "@firebase/auth";
import "./Auth.css";
import { auth } from "../firebaseConfig";
export default function SignIn() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassWord, setRegisterPassword] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");

  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [user,registerEmail,loginEmail])
  

  console.log("currentUser1",auth.currentUser,"user",user);
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassWord
      );
      console.log("currentUser1",auth.currentUser,"user",user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("currentUser1",auth.currentUser,"user",user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("currentUser1",auth.currentUser,"user",user);
    } catch (error) {
      console.log(error.message);
      return
    }
  };

  return (
    <div className="signInContainer">
      <div className="registerDiv">
        <h2>Register User</h2>
        <input
          placeholder="email..."
          onChange={(e) => {
            e.preventDefault();
            setRegisterEmail(e.target.value)}}
        ></input>
        <input
          placeholder="password..."
          onChange={(e) => {
            e.preventDefault();
            setRegisterPassword(e.target.value)}}
        ></input>
        <button onClick={register}>Create User</button>
      </div>

      <div className="logInDiv">
        <h2>Login User</h2>
        <input
          placeholder="email..."
          onChange={(e) => {
            e.preventDefault();
            setloginEmail(e.target.value)}}
        ></input>
        <input
          placeholder="password..."
          onChange={(e) => {
            e.preventDefault();
            setloginPassword(e.target.value)}}
        ></input>
        <button onClick={login}>Login User</button>
      </div>
      <div>
        <h4>
          User Logged in:
          {user?.email}
        </h4>
        <button onClick={()=>{
        logout()
        setUser({})
        }}>signOut</button>
      </div>
    </div>
  );
}
