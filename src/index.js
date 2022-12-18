import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter} from 'react-router-dom';
import {TweetContextProvider} from './Context'
import { FirebaseConfigContextProvider } from './FirebaseConfigContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <HashRouter>
  <FirebaseConfigContextProvider>
      <TweetContextProvider>
      <App />
      </TweetContextProvider>
      </FirebaseConfigContextProvider>
  </HashRouter>

);

