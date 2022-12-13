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
        <h1 className="profileTitle">Profile</h1>
        <h5 className="titleDetails">User Name</h5>
        <form className="user-pick-form">
          <input
            id="user"
            name="user"
            autoFocus
            placeholder="write your user name here"
            onChange={handleTextChange}
            value={text}
          ></input>
          <button
          className="pickAUserButton"
            onClick={async (e) => {
              e.preventDefault();
              setUser(text);
            }}
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}
