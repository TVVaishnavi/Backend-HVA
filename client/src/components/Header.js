import '../style/Header.css';
import { useNavigate } from "react-router-dom";

function Header({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
  const role = localStorage.getItem("role"); 

  localStorage.removeItem("usertoken");
  localStorage.removeItem("userDetail");
  localStorage.removeItem("role");

  setIsLoggedIn(false);

  if (role === "admin") {
    navigate("/adminlogin");
  } else {
    navigate("/login");
  }
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
