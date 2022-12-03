import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {useContext} from 'react'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {TweetContextProvider,Context} from './Context'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBtBywV8Afjsciq-EpfdKuMmGjlXNEi17c",
  authDomain: "microblogapp-9299c.firebaseapp.com",
  projectId: "microblogapp-9299c",
  storageBucket: "microblogapp-9299c.appspot.com",
  messagingSenderId: "721656743736",
  appId: "1:721656743736:web:80b086d1bc4fb1e901a3cd",
  measurementId: "G-TN56ZLEKF1"
};
const app = initializeApp(firebaseConfig)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
      <TweetContextProvider>
      <App />
      </TweetContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
