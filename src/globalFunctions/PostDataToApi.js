

export async function PostDataToApi(tweetObject) {
  const newTweet = {
    "date": {
      "timestampValue": tweetObject.date
    },
    "userName": {
      "stringValue": tweetObject.userName
    },
    "content": {
      "stringValue": tweetObject.content
    }
  }
    const response = await fetch('https://firestore.googleapis.com/v1/projects/microblogapp-9299c/databases/(default)/documents/tweets', {
      method: 'POST',
      body: JSON.stringify({
        "fields": newTweet
      })
    });

    const data = await response.json();
    console.log(data);

} 



