import { useState, useEffect, useContext } from "react";
import "../Pages/Profile.css";
import { Context } from "../Context";
import { FirebaseConfigContext } from "../FirebaseConfigContext";
// import TweetCard from '../componenets/Tweet'
export default function Profile() {
  const { userAuthTweet } = useContext(Context);
  const { authenticatedUser } = useContext(FirebaseConfigContext);
 
  return (
    <>
      <div className="profileContainer">
        <h1 className="profileTitle">Profile</h1>
        <h5>{authenticatedUser.email}</h5>
        <h5>{authenticatedUser.uid}</h5>
        <h5>{authenticatedUser.displayName}</h5>
 
      </div>
    </>
  );
}