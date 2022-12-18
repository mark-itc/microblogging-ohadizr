import React from "react";
import { useContext } from "react";
import { FirebaseConfigContext } from "../FirebaseConfigContext";
import { Context } from '../Context';




export default async function PostNewUserToStorage(uid) {
  const {userList} = useContext(Context)
  const {authenticatedUser} = useContext(FirebaseConfigContext)

async function PostUser(){
    const newUser = {
      "displayName": {
        "stringValue": localStorage.getItem("displayName")
      },
      "uid": {
        "stringValue": uid
      },
    }
    const response = await fetch('https://firestore.googlepis.com/v1/projects/microblogapp-9299c/databases/(default)/documents/users', {
      // const response = await fetch('https://api.jsonbin.io/v3/b/639df8cadfc68e59d56abf9c', {
      // method: 'PUT', //JSON bin
      method: 'POST', //firebase
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": "$2b$10$NbA7Dawp2a6qonyjAcNmKOKv3kyKgWiBg8xW6a1HOfZI8B6l4T6L2"
  },
      body: JSON.stringify({
       "documents":{"fields": newUser}
        })
      });

      const data = await response.json();

      // return (
      //   {       success: true,
      //          results: data}
      //  )
}
const findUser = (users, uid) => users.find(user => user.uid === uid)
const user = findUser(userList, authenticatedUser.uid)


!user?PostUser():console.log("Err0r:userExsist");
// PostUser()
} 



