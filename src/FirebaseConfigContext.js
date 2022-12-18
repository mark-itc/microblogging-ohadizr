import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { getStorage } from "firebase/storage";
// import { auth } from './getAuthFirebase'
;

const fireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBtBywV8Afjsciq-EpfdKuMmGjlXNEi17c",
  authDomain: "microblogapp-9299c.firebaseapp.com",
  databaseURL:
    "https://microblogapp-9299c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "microblogapp-9299c",
  storageBucket: "microblogapp-9299c.appspot.com",
  messagingSenderId: "721656743736",
  appId: "1:721656743736:web:80b086d1bc4fb1e901a3cd",
  measurementId: "G-TN56ZLEKF1",
});
export default fireBaseApp;

const FirebaseConfigContext = createContext();
const storage = getStorage(fireBaseApp);

const auth = getAuth(fireBaseApp);
function FirebaseConfigContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState({});

  return (
    <FirebaseConfigContext.Provider
      value={{ authenticatedUser, setAuthenticatedUser,auth,storage }}
    >
      {children}
    </FirebaseConfigContext.Provider>
  );
}

export { FirebaseConfigContext, FirebaseConfigContextProvider };
