import '../componenets/Tweet.css'
function TweetCard(props) {
    const { userName, content, date} = props;


    return (

        <div className="tweetCard">
        <h5 className="tweetName">{userName}</h5>
        <h5 className="tweetTime">{date}</h5>
        <p className="tweetText">{content}</p>
        </div>

    )
}

export default TweetCard