import React from "react";
import "./App.css";
import {useContext} from "react"
import { Routes, Route, } from "react-router-dom";
import NavBar from './componenets/NavBar'
import Profile from './Pages/Profile'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import {FirebaseConfigContext  } from "./FirebaseConfigContext";
import Wellcome from "./Pages/Wellcome";
//firebase web: https://microblogapp-9299c.web.app/
//firestore api: https://firestore.googleapis.com/v1/projects/microblogapp-9299c/databases/(default)/documents/tweets
//json.bin api:https://api.jsonbin.io/v3/b/639748d42d0e0021081b0217 // Alternative Api to Firestore (bug made max usage for a day in fire)
function App() {
const {authenticatedUser} = useContext(FirebaseConfigContext)

  return (
    <>
      <NavBar />
      <Routes>
      {!authenticatedUser? <Route path="/" element={<Wellcome />} />
      :
      <>        
      <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        </>
      }


        <Route path="/SignIn" element={<SignIn />} /> 
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;




// ● Instead of saving the userName on every tweet, save a reference to the user by the
// user id.
// ● Add profile picture upload for every user (hint: use firebase cloud storage)
// ● The data needs to update live when there are new tweets (without intervals)


// ● Implement infinite scrolling - at the beginning get 10 tweets, and when the user
// reaches the end of the screen load the next 10 tweets, etc. (hint: look for firestore
// pagination.)
// ● No need for a custom backend! all of your code should be in your react project.