import React from 'react'
import './TweetContainer.css'
import { useState, useEffect, useContext } from "react";
import TweetCard from './Tweet'
import { Context } from "../../Context";
import { FirebaseConfigContext } from "../../FirebaseConfigContext";



export default function TweetsContainer(props) {
        const {pages} = props;
        const { globalTweetList } = useContext(Context);
        const createTweetHtml=()=> {
        const tweetComponenetsArray= globalTweetList.map((singleTweet, index) => {
          return (
            <TweetCard
              key={index}
              page={Math.floor(index/10)}
              uid={singleTweet.uid}
              date={singleTweet.date}
              content={singleTweet.content}
            />
          );
        });

        // const tweetsPerPage=tweetComponenetsArray.filter((tweet)=>tweet.props.page==pages) //one page at a time 
        const tweetsPerPage=tweetComponenetsArray.filter((tweet)=>tweet.props.page<=pages) //all pages

        return tweetsPerPage
      }
  return (
    <div>
        <div className="tweet-list">
          {globalTweetList.length > 0 ? createTweetHtml() : null}
        </div>
    </div>
  )
}
