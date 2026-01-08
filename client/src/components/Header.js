import '../style/Header.css';
import { useNavigate } from "react-router-dom";

function Header({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("usertoken");
    localStorage.removeItem("userDetail");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className='header-container'>
      <h1 onClick={() => navigate("/")}>Task Viewer</h1>

      {isLoggedIn && (
        <button onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
}

export default Header;
