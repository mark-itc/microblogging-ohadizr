import "../components/NavBar.css";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="NavBarContainer">
          <button
            onClick={() => {
              navigate("/Home");
            }}
            className="navButton"
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate("/Profile");
            }}
            className="navButton"
          >
            Profile
          </button>
      </nav>
    </>
  );
}
