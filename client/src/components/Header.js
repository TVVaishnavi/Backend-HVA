import '../style/Header.css'
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () =>{
        localStorage.removeItem("token");
        navigate("/login")
    }
    return (
        <div className='header-container'>
            <h1 onClick={()=>navigate("/")}>Task Viewer</h1> 

            {token && (
                <button onClick={handleLogout}>
                Logout
                </button>
            )}
        </div>
    )

}

export default Header;
