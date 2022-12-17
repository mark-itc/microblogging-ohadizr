import { useEffect } from "react";
import { useState } from "react";
import { createContext,useContext } from "react";
// import { apiGetData } from "../Test_React_Firebase/src/globalFunctions/api";
import {apiGetData} from './globalFunctions/GetApiData'
import { getUserListFromApi } from "./globalFunctions/getUserListFromApi";
import { FirebaseConfigContext } from "./FirebaseConfigContext";
import PostNewUserToStorage from './globalFunctions/postNewUserToStorage'
const Context = createContext();

function TweetContextProvider({ children }) {
  const {authenticatedUser} = useContext(FirebaseConfigContext)
  const [globalTweetList, setGlobalTweetList] = useState([]);
  const [userAuthTweet, setUserAuthTweet] = useState([]);
  const [userList, setUserList] = useState([]);


  const fetchUserListFromApi= async()=>{
    const results = await getUserListFromApi();
    if (results.success) {
     setUserList(results.results);
    } else {
      console.log(results.message);
    }
  }

  
  const fetchFromAPI = async () => {
    const results = await apiGetData();
    if (results.success) {
       setGlobalTweetList(results.results);

      const resultForUser = results.results.filter(
        (tweet) => (tweet.uid === authenticatedUser.uid)
      );
      setUserAuthTweet(resultForUser);
     
    } else {
      alert(results.message);
    }
  };
  useEffect(() => {
    const user = userList.find(user => user.uid=== authenticatedUser.uid);
    user?console.log('user exist'):PostNewUserToStorage()
    fetchFromAPI();
    fetchUserListFromApi()
    
    
  }, [authenticatedUser]);


  setInterval(() => {
    fetchFromAPI()
    fetchUserListFromApi()
  }, 10000000);

  return (
    <Context.Provider
      value={{userList, setUserList,userAuthTweet, setUserAuthTweet, globalTweetList, setGlobalTweetList }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, TweetContextProvider };
