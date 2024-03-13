// SignInPage.js
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import './SignInPage.css';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegularLogin = (event) => {
        event.preventDefault();

        if (email === 'example@example.com' && password === 'password123') {
            console.log('Login successful');
        } else {
            setErrorMessage('Incorrect email or password. Please try again.');
        }
    };

    const handleGoogleLoginSuccess = (response) => {
        console.log('Google login success:', response);
    };

    const handleGoogleLoginFailure = (error) => {
        console.error('Google login error:', error);
    };

    return (
        <div>
            <div className="content-container">
                <h1>Login</h1>
                <form onSubmit={handleRegularLogin}>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />

                    <label>Password:</label>
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    <button type="submit">Login</button>
                </form>
                <div className="google-login-container">
                    <GoogleLogin
                        clientId="421894306856-g38dom4qta3p1flia9dklobp6alg9aoq.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={handleGoogleLoginSuccess}
                        onFailure={handleGoogleLoginFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
                <div className="register-link">
                    <Link to="/register">Don't have an account? Register here</Link>
                </div>
            </div>
            {errorMessage && 
                <div className="error-message">{errorMessage}</div>
            }
        </div>
    );
}

export default SignInPage;