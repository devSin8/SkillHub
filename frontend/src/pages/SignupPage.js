import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api'; // <-- UPDATED

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authData = { email, password };

        try {
            await signup(authData); // <-- UPDATED
            alert('Signup successful! Please log in. (Local Demo)');
            navigate('/login'); 
        } catch (error) {
            console.error("Error signing up:", error);
            alert("Signup failed. Check console for details.");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '500px' }}>
            <h2>Sign Up</h2>
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
                        onChange={(e) => setPassword(e.g.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupPage;
