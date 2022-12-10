import '../Pages/Home.css'
import { useState, useEffect, useContext } from "react";
import { getCurrentTime } from "../globalFunctions/timeFuncs";
import TweetCard from '../componenets/Tweet'
import { PostDataToApi } from "../globalFunctions/PostDataToApi";
import { Context } from "../Context";

function Home() {
  const { globalUser, setGlobalUser, globalTweetList, setGlobalTweetList } =
    useContext(Context);
  let user = globalUser;
  const [tweet, setTweet] = useState("");
  const [newTweet, setNewTweet] = useState([]);

  const handleTextChange = (event) => {
    setTweet(event.target.value);
  };

  useEffect(() => {
    if (newTweet != "") {
      setGlobalTweetList((current) => [...current, newTweet]);
      PostDataToApi(newTweet);
    }
  }, [newTweet]);

  function createTweetHtml() {
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
                  userName: user,
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
