import React from 'react'
import { useContext,useEffect,useState } from 'react';
import { Context } from '../../Context';
import { FirebaseConfigContext } from '../../FirebaseConfigContext';
import PostNewUserToStorage from '../../globalFunctions/PostNewUserToStorage';

export default function Loading() {
  const {userList} = useContext(Context)
  const {authenticatedUser} = useContext(FirebaseConfigContext)
  const findUser = (users, id) => users.find(user => user.uid === id)
  const user = findUser(userList, authenticatedUser.uid)
  const [addUserActiveBolian, setAddUserActiveBolian] = useState(false)
    useEffect(() => {
      if (!user && userList.length >= 0&&addUserActiveBolian == false) {
        console.log("adding new user");

        setAddUserActiveBolian(true)
        PostNewUserToStorage(authenticatedUser.uid)
        
      }
      if(!user &&userList.length == 0){
      console.log("userList is empty:",userList);
      }
      if(user){
        console.log("user:",user);
        
        }else{
        
        console.log("Error: Error in uploading new user");
      }
      
    }, [user])
    

      return (
        <div className='home-Loading-Container'>
      <div className="spinner-container">
        <div className="loading-spinner">
        </div>
      </div>
      </div>
    );
}
