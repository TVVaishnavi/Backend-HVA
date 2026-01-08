import React, { useState } from 'react';
import { useAuthList } from '../hooks/Controller';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css'

function AdminLogin({setIsLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuthList();

    const handleLogin = async (user, passcode) => {
        if (user === '' || passcode === '') {
            alert("Please fill your details");
            return;
        }
        try {
            const data = { email: user, password: passcode };
            const response = await login(data);
            const tokenFromServer = response.token;
            if (!tokenFromServer) {
                alert("Login failed: no token received");
                return;
            }
            localStorage.setItem('usertoken', tokenFromServer);
            setIsLoggedIn(true)
            navigate('/task');
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Admin Login</h2>

                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    className="submit-btn"
                    onClick={() => {console.log("button clicked");
                        handleLogin(email, password)}}
                >
                    Submit
                </button>

            </div>
        </div>
    );
}

export default AdminLogin;
