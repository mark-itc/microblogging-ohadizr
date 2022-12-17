
export async function getUserListFromApi() {
  try {

      const respone=await fetch('https://firestore.googleapis.com/v1/projects/microblogapp-9299c/databases/(default)/documents/users')
      const results=await respone.json()

      const mapedResults= results.documents.map((i)=>{
        let id = i.name.substring(i.name.lastIndexOf('/') + 1)
        let uid= i.fields.uid.stringValue
        let Name= i.fields.Name.stringValue
        // let Picture= i.fields.Picture.referenceValue
        let userObj = {
          uid:uid,
          Name:Name,
          id:id
          // Picture:Picture,
        }
        return userObj 
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