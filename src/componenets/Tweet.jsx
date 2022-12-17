import '../componenets/Tweet.css'
import React from 'react';
import { useContext } from 'react';
import { Context } from '../Context';
// import {getUserListFromApi} from '../globalFunctions/getUserListFromApi'

function TweetCard(props) {
    const {userList} =useContext(Context);
    const { uid, content, date,} = props;
    let name= null
    // name=(userList.filter(i=>i.uid===uid)[0].Name);
    
    return (

        <div className="tweetCard">
        {/* <h5 className="tweetId">{name}</h5> */}
        <h5 className="tweetTime">{date}</h5>
        <p className="tweetText">{content}</p>
        </div>

    )
}

export default TweetCard