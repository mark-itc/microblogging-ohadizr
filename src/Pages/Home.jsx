import React from 'react';
import '../Pages/Home.css'
import { useState, useContext,useEffect } from "react";
import { getCurrentTime } from "../globalFunctions/timeFuncs";
// import TweetCard from '../componenets/FeedHomeComponenets/Tweet'
import { PostDataToApi } from "../globalFunctions/PostDataToApi";
import { Context } from "../Context";
import { FirebaseConfigContext } from "../FirebaseConfigContext";
import Loading from '../componenets/LoginupComponents/Loading';
import TweetsContainer from '../componenets/FeedHomeComponenets/TweetsContainer';
import CreateTweetContainer from '../componenets/FeedHomeComponenets/CreateTweetContainer';
function Home() {

  const {authenticatedUser,auth}= useContext(FirebaseConfigContext)
  const {userList,globalTweetList} =
    useContext(Context);
  const findUser = (users, id) => users.find(user => user.uid === id)
  const user = findUser(userList, authenticatedUser.uid)

  const [pages, setPages] = useState(0)
useEffect(() => {
  
}, [authenticatedUser])
const pagesMax=Math.ceil(globalTweetList.length/10)

const pageButtons=()=>{   
  const pageButtonsArray=[]
  for(let i=0;i<pagesMax;i++){
    pageButtonsArray.push(<button onClick={()=>setPages(i)}>{i}</button>)
  }
  return pageButtonsArray
}
  return (
    !user&&authenticatedUser.uid?<Loading/>:
    <>
    <div className="home-container">
    <CreateTweetContainer/>
      <TweetsContainer
        pages={pages}
      />
 
    <div className='moreOrLess'>
      <button className='buttonStandard' onClick={() => setPages(pages - 1)}>Less</button>
      <button className='buttonStandard' onClick={() => setPages(pages + 1)}>More</button>
      <button className='buttonStandard' onClick={() => setPages(0)}>Reset</button>
      {/* <div className='buttonStandard'> {pageButtons()}</div> */}

    </div>
    </div>
    </>
  );
}
export default Home;