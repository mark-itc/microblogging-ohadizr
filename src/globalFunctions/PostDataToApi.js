

export async function PostDataToApi(tweetObject) {
    const rawResponse = await fetch('https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    // to do on return to israel->
    //replace fake tweet with generated tweet useing fucntion input 
    // body: JSON.stringify({"content": "test2", "userName": 'Yaakov',"date":"3-12-2022-16:5:43"})
    body: JSON.stringify(tweetObject)
    });
    const content = await rawResponse.json();
    
    // console.log(content);
    return
} 