import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api'; // <-- UPDATED

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const authData = { email, password };

        try {
            await login(authData); // <-- UPDATED
            alert('Login successful! (Local Demo)');
            navigate('/'); 
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Login failed. Check console for details.");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '500px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {/* ... all form inputs ... (no changes here) */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
