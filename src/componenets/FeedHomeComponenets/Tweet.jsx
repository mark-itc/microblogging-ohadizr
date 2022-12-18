// import '/Tweet.css'
import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context';

function TweetCard(props) {
    const {userList} =useContext(Context);
    const { uid, content, date,page} = props;
    const findUser = (users, uid) => users.find(user => user.uid === uid)
    const user = findUser(userList, uid)
    return (

        <div className="tweetCard">
        <h5 className="tweetId">{user?user.displayName:null}</h5> 
        <h5 className="tweetTime">{date?date+" "+ page:null}</h5>
        <p className="tweetText">{content?content:null}</p>
        </div>

    )
}

export default TweetCard