

export async function PostDataToApi(tweetObject) {
  const newTweet = {
    "date": {
      "timestampValue": tweetObject.date
    },
    "uid": {
      "stringValue": tweetObject.uid
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
    console.log(response);
    const data = await response.json();
    console.log(data);

} 



