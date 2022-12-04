import React from 'react';
import { useState, useEffect, useContext } from "react";
import "../Pages/Profile.css";
import { Context } from "../Context";

export default function Profile() {
  const { globalUser, setGlobalUser } = useContext(Context);

  const [text, setText] = useState("");
  const [user, setUser] = useState(globalUser);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  useEffect(() => {
    setGlobalUser(user);
    console.log("setNewUser " + user);
  }, [user]);

  return (
    <>
      <div className="profileContainer">
        <h1 className="profileTest">profile</h1>
        <form>
          <input
            id="user"
            name="user"
            placeholder="userName"
            onChange={handleTextChange}
            value={text}
          ></input>
          <button
            onClick={async (e) => {
              e.preventDefault();
              setUser(text);
            }}
          >
            pickUser
          </button>
        </form>
      </div>
    </>
  );
}
