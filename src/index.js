import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import "./index.css";
import App from "./App";


const app = initializeApp({
  apiKey: "AIzaSyC89insvD2vO7mCpXA9F-IqS8tZqtDUzHA",
  authDomain: "smart-invest-14838.firebaseapp.com",
  projectId: "smart-invest-14838",
  storageBucket: "smart-invest-14838.appspot.com",
  messagingSenderId: "847170867835",
  appId: "1:847170867835:web:817f0391d17101330008de",
  measurementId: "G-PN3BH840HT"
});
const auth = getAuth(app);
const db = getFirestore(app);

export const Context = createContext({auth, db})

onAuthStateChanged(auth, (user) => {
  if(user) {
    console.log(user)
  }else {
    console.log("none user")
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      app,
      auth,
      db 
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
