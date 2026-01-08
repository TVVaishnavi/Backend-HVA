import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthList } from '../hooks/Controller';
import '../style/Register.css';

function Register() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [emailIndicator, setEmailIndicator] = useState(true);
    const [indicator, setIndicator] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const { signup } = useAuthList();

    const handleSubmit = async () => {
        if (!userName || !email || !password || !confirmPassword) {
         setIndicator(true);
         return;
        }

        if (emailIndicator) {
            if (password === confirmPassword) {
                const data = { name: userName, email, password };
                await signup(data);
            } else {
                setIndicator(true);
                return;
            }
        } else {
            setIndicator(true);
        }
    };

    const checkEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailIndicator(emailRegex.test(email));
    };


    return (
        <div className="register-container">
            <div className="register-card">
                <h2>Register</h2>

                <div className="input-group">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            checkEmail(e.target.value);
                        }}
                    />
                    {!emailIndicator && <span className="error">Invalid Email</span>}
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

                <div className="input-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Re-enter your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {indicator && <p className="error">Passwords do not match</p>}
                </div>

                <button className="submit-btn" onClick={handleSubmit}>
                    Signup
                </button>

                <p className="login-link" onClick={() => navigate('/login')}>
                    Already have an Account?
                </p>
            </div>
        </div>
    );
}

export default Register;
