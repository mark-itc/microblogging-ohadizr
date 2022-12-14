import '../Pages/Home.css'
import { useState, useEffect, useContext } from "react";
import { getCurrentTime } from "../globalFunctions/timeFuncs";
import TweetCard from '../componenets/Tweet'
import { PostDataToApi } from "../globalFunctions/PostDataToApi";
import { Context } from "../Context";
import { FirebaseConfigContext } from "../FirebaseConfigContext";

function Home() {
  const {authenticatedUser}= useContext(FirebaseConfigContext)
  const { userAuthTweet, setUserAuthTweet, globalTweetList, setGlobalTweetList } =
    useContext(Context);
  const [tweet, setTweet] = useState("");
  const [newTweet, setNewTweet] = useState([]);

  const handleTextChange = (event) => {
    setTweet(event.target.value);
    console.log(tweet);
  };

  useEffect(() => {
    if (newTweet != "") {
      console.log("works");
      setGlobalTweetList((current) => [...current, newTweet]);
      PostDataToApi(newTweet);
  
    }
  }, [authenticatedUser,globalTweetList]);


  function createTweetHtml() {
        console.log(globalTweetList);
    return globalTweetList.map((singleTweet, index) => {
      return (
        <TweetCard
          key={index}
          userName={singleTweet.userName}
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
          <form className="tweet-form">
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
              onClick={async (e) => {
                e.preventDefault();

                setNewTweet({
                  userName: authenticatedUser.displayName,
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
