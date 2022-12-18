import { useState, useContext } from "react";
import "../Pages/Profile.css";
import { Context } from "../Context";
import { FirebaseConfigContext } from "../FirebaseConfigContext";
// import TweetCard from '../componenets/Tweet'



import 'firebase/storage';

export default function Profile() {
  const { authenticatedUser,storage } = useContext(FirebaseConfigContext);

 
  return (
    <>
      <div className="profileContainer">
      <img src={
          "https://firebasestorage.googleapis.com/v0/b/microblogapp-9299c.appspot.com/o/ProfileImgs%2Fdownload.jpg?alt=media&token=ac81a25f-adad-4588-9208-bcd7dc40792c"

        } alt='uploaded file' 
        className="profilePhoto" />
        <h1 className="profileTitle">Profile</h1>
        <h5>{authenticatedUser.email}</h5>
        <h5>{authenticatedUser.uid}</h5>
        <h5>{authenticatedUser.displayName}</h5>

 
      </div>
    </>
  );
}