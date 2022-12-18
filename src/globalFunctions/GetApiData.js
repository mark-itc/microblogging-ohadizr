
export async function apiGetData() {
    try {
        //fireStore
        const respone=await fetch('https://firestore.googleapis.com/v1/projects/microblogapp-9299c/databases/(default)/documents/tweets')

        //jsonBin
        // const respone=await fetch('https://api.jsonbin.io/v3/b/639df97c01a72b59f23311f5')


        const results=await respone.json()
        const mapedResults= results.documents.map((i)=>{
        // const mapedResults= results.record.documents.map((i)=>{  //jsonBin
          let id = i.name.substring(i.name.lastIndexOf('/') + 1)
          let uid= i.fields.uid.stringValue
          let content= i.fields.content.stringValue
          let date =i.fields.date.timestampValue
          let tweetObj = {
            uid:uid,
            content:content,
            date:date,
            id:id
          }
          return tweetObj
        }
      )

        return (
         {       success: true,
                results: mapedResults}
        )
    } catch (error) {
        console.log(error);
    }
}