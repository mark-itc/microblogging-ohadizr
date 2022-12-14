import { useEffect } from "react";
import { useState } from "react";
import { createContext,useContext } from "react";
// import { apiGetData } from "../Test_React_Firebase/src/globalFunctions/api";
import {apiGetData} from './globalFunctions/GetApiData'
import { FirebaseConfigContext } from "./FirebaseConfigContext";
const Context = createContext();

function TweetContextProvider({ children }) {
  const {authenticatedUser} = useContext(FirebaseConfigContext)
  const [globalTweetList, setGlobalTweetList] = useState([]);
  const [userAuthTweet, setUserAuthTweet] = useState([]);

  const fetchFromAPI = async () => {
    const results = await apiGetData();

    if (results.success) {

      setGlobalTweetList(results.results);
      setUserAuthTweet(resultForUser);
      const resultForUser = results.results.filter(
        (tweet) => (tweet.userName === authenticatedUser.displayName)?console.log(tweet):null
      );


        console.log(resultForUser);
     
    } else {
      alert(results.message);
    }
  };
  useEffect(() => {
    fetchFromAPI();
  }, [authenticatedUser]);

  setInterval(() => {
    fetchFromAPI()
  }, 10000000);

  return (
    <Context.Provider
      value={{userAuthTweet, setUserAuthTweet, globalTweetList, setGlobalTweetList }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, TweetContextProvider };
