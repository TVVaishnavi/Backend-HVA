import '../style/Header.css'
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <div className='header-container'>
            <h1 onClick={()=>navigate("/")}>Task Viewer</h1>
        </div>
    )

}

export default Header;
