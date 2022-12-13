import React from "react";
import "./App.css";
import { Routes, Route, useParams, Link } from "react-router-dom";
import NavBar from './componenets/NavBar'
import Profile from './Pages/Profile'
import Home from './Pages/Home'
import SignIn from './Pages/Auth'
import SignUp from './Pages/SignUp'
import fireBaseApp from './firebaseConfig'


//firebase web: https://microblogapp-9299c.web.app/
//firestore api: https://firestore.googleapis.com/v1/projects/microblogapp-9299c/databases/(default)/documents/tweets
//json.bin api:https://api.jsonbin.io/v3/b/639748d42d0e0021081b0217 // Alternative Api to Firestore (bug made max usage for a day in fire)
function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SignIn" element={<SignIn />} /> 
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;



// ● Only logged in users can see tweets and send tweets (see “firestore rules”) -
// implement a Login and Sign Up page with firebase auth, if the user is not logged in
// - prevent routing to the tweets pages, and redirect the user to the login page. You
// can implement your own view and design. Implement a login and signup both with
// google and with a custom email and password.
// ● Instead of saving the userName on every tweet, save a reference to the user by the
// user id.
// ● Add profile picture upload for every user (hint: use firebase cloud storage)
// ● The data needs to update live when there are new tweets (without intervals)
// ● Implement infinite scrolling - at the beginning get 10 tweets, and when the user
// reaches the end of the screen load the next 10 tweets, etc. (hint: look for firestore
// pagination.)
// ● No need for a custom backend! all of your code should be in your react project.