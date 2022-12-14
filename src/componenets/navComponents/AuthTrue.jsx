import React from "react";
import { useNavigate,useParams } from "react-router-dom";
import { useContext } from "react";
import { signOut } from "@firebase/auth";

export default function AuthTrue() {
    const FirebaseConfigContext= useParams()
  const navigate = useNavigate();
  const { auth, authenticatedUser, setAuthenticatedUser } = useContext(
    FirebaseConfigContext
  );

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("currentUser1", auth.currentUser, "user", authenticatedUser);
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  return (
    <>
      <button
        onClick={() => {
          navigate("/Profile");
        }}
        className="navButton"
      >
        Profile
      </button>
      <button
        onClick={() => {
          logout();
          setAuthenticatedUser({});
        }}
      >
        signOut
      </button>
    </>
  );
}
