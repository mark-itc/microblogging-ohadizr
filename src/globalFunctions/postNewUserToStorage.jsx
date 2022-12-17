import React from "react";
import { useContext } from "react";
import { FirebaseConfigContext } from "../FirebaseConfigContext";



export default async function PostNewUserToStorage(name) {
const {authenticatedUser} = useContext(FirebaseConfigContext)
console.log("postNewUserToStorage");
console.log(localStorage.getItem("name"));
console.log(authenticatedUser.uid)

  const newUser = {
    "name": {
      "stringValue": localStorage.getItem("name")
    },
    "uid": {
      "stringValue": authenticatedUser.uid
    },

  }
    const response = await fetch('https://firestore.googleapis.com/v1/projects/microblogapp-9299c/databases/(default)/documents/users', {
      method: 'POST',
      body: JSON.stringify({
        "fields": newUser
      })
    });
    console.log(response);
    const data = await response.json();
    console.log(data);

} 



