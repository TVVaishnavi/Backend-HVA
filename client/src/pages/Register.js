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
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { signup } = useAuthList();
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    const handleSubmit = async () => {
      if (!userName || !email || !password || !confirmPassword) {
        setIndicator(true);
        return;
      }

      if (password !== confirmPassword) {
        setIndicator(true);
        return;
      }

      try {
       setLoading(true);
       const data = { name: userName, email, password };
       await signup(data);
       navigate("/login");
     }catch (error) {
       console.error(error);
       alert("Signup failed. Please try again.");
     } finally {
       setLoading(false); 
     }
  };

    const checkEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailIndicator(emailRegex.test(email));
    };

    const passwordRules = {
       length: password.length >= 8,
       uppercase: /[A-Z]/.test(password),
       lowercase: /[a-z]/.test(password),
       number: /\d/.test(password),
       special: /[@$!%*?&#]/.test(password),
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
                    <div className="password-rules">
                        <p className={passwordRules.length ? "valid" : "invalid"}>
                           • At least 8 characters
                        </p>
                        <p className={passwordRules.uppercase ? "valid" : "invalid"}>
                           • One uppercase letter
                        </p>
                        <p className={passwordRules.lowercase ? "valid" : "invalid"}>
                           • One lowercase letter
                        </p>
                        <p className={passwordRules.number ? "valid" : "invalid"}>
                           • One number
                        </p>
                        <p className={passwordRules.special ? "valid" : "invalid"}>
                           • One special character
                        </p>
                   </div>

                </div>

                <div className="input-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Re-enter your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {confirmPassword.length > 0 && (
                              password === confirmPassword ? (
                                <p className="valid">Passwords match</p>
                              ) : (
                                  <p className="invalid">Passwords do not match</p>
                              )
                    )}
                </div>

                <button
                   className="submit-btn"
                   onClick={handleSubmit}
                   disabled={loading}
                >
                  {loading ? "Signing up..." : "Signup"}
                </button>

                <p className="login-link" onClick={() => navigate('/login')}>
                    Already have an Account?
                </p>
            </div>
        </div>
    );
}

export default Register;
