import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Header.css";

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="header-container">
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
