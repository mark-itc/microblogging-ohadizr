
export async function getUserListFromApi() {
  // jsonBin
  // const url= 'https://api.jsonbin.io/v3/b/639df8cadfc68e59d56abf9c'
  // rirebase
  const url='https:firestore.googleapis.com/v1/projects/microblogapp-9299c/databases/(default)/documents/users'
  try {

      const respone=await fetch(url)
      const results=await respone.json()
      const mapedResults= results.documents.map((i)=>{     //firebase !!!
      // const mapedResults= results.record.documents.map((i)=>{    //jsonBin !!!
        let id = i.name.substring(i.name.lastIndexOf('/') + 1)    //firebase Only
        let uid= i.fields.uid.stringValue
        let displayName= i.fields.displayName.stringValue
        // let Picture= i.fields.Picture.referenceValue
        let userObj = {
          uid:uid,
          displayName:displayName,
          id:id       //firebase Only
          // Picture:Picture,
        }
        return userObj 
      }
    )

      return (
       {     
              success: true, 
              results: mapedResults
            }
      )
  } catch (error) {
      // console.log(error);
  }
}