
export async function apiGetData() {
    try {
        //fireStore
        const respone=await fetch('https://firestore.googleapis.com/v1/projects/microblogapp-9299c/databases/(default)/documents/tweets')

        //jsonBin
        // const respone=await fetch('https://api.jsonbin.io/v3/b/6397564d811f2b20b0868994')


        const results=await respone.json()

        // const resultsFireStore=results.documents
        // const resultsJsonBin=results.record.documents

        const mapedResults= results.documents.map((i)=>{
          let id = i.name.substring(i.name.lastIndexOf('/') + 1)
          let userName= i.fields.userName.stringValue
          let content= i.fields.content.stringValue
          let date =i.fields.date.timestampValue
          let tweetObj = {userName:userName,
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