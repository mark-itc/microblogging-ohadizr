import '../Pages/Home.css'
import { useState, useEffect, useContext } from "react";
import { getCurrentTime } from "../globalFunctions/timeFuncs";
import TweetCard from '../componenets/Tweet'
import { PostDataToApi } from "../globalFunctions/PostDataToApi";
import { Context } from "../Context";
import { FirebaseConfigContext } from "../FirebaseConfigContext";
import {getUserListFromApi} from '../globalFunctions/getUserListFromApi'
function Home() {

  const {authenticatedUser}= useContext(FirebaseConfigContext)
  const { userListuserAuthTweet, setUserAuthTweet, globalTweetList, setGlobalTweetList } =
    useContext(Context);
  const [tweet, setTweet] = useState("");
  const [newTweet, setNewTweet] = useState([]);
 
  const handleTextChange = (event) => {
    setTweet(event.target.value);

  };
//  useEffect(() => {

//  }, [authenticatedUser])
 
function onFormSubmit(e) {
  e.preventDefault()
  setGlobalTweetList((current) => [...current, newTweet]);
  PostDataToApi(newTweet)

}


const createTweetHtml=()=> {
    return globalTweetList.map((singleTweet, index) => {
      return (
        <TweetCard
          key={index}
          uid={singleTweet.uid}
          date={singleTweet.date}
          content={singleTweet.content}
        />
      );
    });
  }




  return (
    <>
      <div className="home-container">
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
        <div className="tweet-list">
          {globalTweetList.length > 0 ? createTweetHtml() : null}
        </div>
      </div>
    </>
  );
}

export default Home;
