import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
// import { apiGetData } from "../Test_React_Firebase/src/globalFunctions/api";
import {apiGetData} from './globalFunctions/GetApiData'

const Context = createContext();

function TweetContextProvider({ children }) {
  const [globalUser, setGlobalUser] = useState("Simba");
  const [globalTweetList, setGlobalTweetList] = useState([]);

  const fetchFromAPI = async () => {
    const results = await apiGetData();

    if (results.success) {
      const resultForUser = results.results.filter(
        (tweet) => tweet.userName === globalUser
      );
      setGlobalTweetList(resultForUser);
    } else {
      alert(results.message);
    }
  };
  useEffect(() => {
    // fetchFromAPI();
  }, [globalUser]);

  setInterval(() => {
    // fetchFromAPI()
  }, 10000000);

  return (
    <Context.Provider
      value={{ globalUser, setGlobalUser, globalTweetList, setGlobalTweetList }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, TweetContextProvider };
