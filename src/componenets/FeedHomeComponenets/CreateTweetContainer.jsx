import React from 'react'
import './CreateTweetContainer.css'
import { useState, useEffect, useContext } from "react";
import { getCurrentTime } from "../../globalFunctions/timeFuncs";
import { PostDataToApi } from "../../globalFunctions/PostDataToApi";
import { Context } from "../../Context";
import { FirebaseConfigContext } from "../../FirebaseConfigContext";

export default function CreateTweetContainer() {
    const {authenticatedUser}= useContext(FirebaseConfigContext)
    const { globalTweetList, setGlobalTweetList,userList } =
      useContext(Context);
    const [tweet, setTweet] = useState("");
    const [newTweet, setNewTweet] = useState([]);

   
    const handleTextChange = (event) => {
      setTweet(event.target.value);
  
    };
  
  function onFormSubmit(e) {
    e.preventDefault()
    setGlobalTweetList((current) => [...current, newTweet]);
    PostDataToApi(newTweet)
  }
  
  return (
    <div className="create-tweet">
    <form className="tweet-form"
    onSubmit={onFormSubmit}
    >
      <textarea
        id="tweet"
        name="tweet"
        className="tweet-textarea"
        placeholder="What you have in mind..."
        maxLength="140"
        value={tweet}
        onChange={handleTextChange}
      />
      {tweet.length < 139 ? (
        <h5></h5>
      ) : (
        <h5 className="tweetCapError">
          The tweet can't contain more then 140 chars.
        </h5>
      )}
      <button
        className="tweet-button"
        type='submit'
        onClick={async (e) => {

          console.log(authenticatedUser)
          setNewTweet({
            uid: authenticatedUser.uid,
            content: tweet,
            date: getCurrentTime(),
          });
        }}
      >
        Tweet
      </button>
    </form>
         </div>
  )
}

