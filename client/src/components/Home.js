import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";

function Home() {
    const navigate = useNavigate();
    const [showUserOption, setShowUserOption] = useState(false);

    return (
        <div className="home-container">
            <div className="home-card">
                <h2>Select User Type</h2>

                <div className="button-group">
                    <div className="option-wrapper">
                        <button className="main-btn"onClick={() => setShowUserOption(!showUserOption)}>
                            User
                        </button>

                        {showUserOption && (
                            <div className="dropdown">
                                <button className="sub-btn" onClick={() => navigate('/register')}>
                                    Signup
                                </button>

                                <button className="sub-btn" onClick={() => navigate('/login')} >
                                    Login
                                </button>
                            </div>
                        )}
                    </div>

                    <button className="main-btn"onClick={() => navigate('/adminlogin')}>
                        Admin
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
