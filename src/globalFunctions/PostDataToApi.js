

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
    // const response=await fetch('https://api.jsonbin.io/v3/b/639df97c01a72b59f23311f5', {  
    // method: 'PUT', //JSON bin
    method: 'POST',
      body: JSON.stringify({
        "fields": newTweet
      })
    });
    console.log(response);
    const data = await response.json();
    console.log(data);

} 



