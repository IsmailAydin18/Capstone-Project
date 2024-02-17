// RegisterPage.js
import React from 'react';
import './RegisterPage.css'; // Import the CSS file for styling

const RegisterPage = () => {
    return (
        <div>
            <div className="content-container">
                <h1>Register</h1>
                <div className="password-requirements">
                    <h3>Password Requirements:</h3>
                    <ul>
                        <li>An uppercase character</li>
                        <li>A minimum of 8 characters</li>
                        <li>An alphabetic character</li>
                        <li>A special character</li>
                        <li>A lowercase character</li>
                        <li>A numeric character</li>
                    </ul>
                </div>
                <form>
                    <label>Email:</label>
                    <input type="email" placeholder="Enter your email" />

                    <label>Password:</label>
                    <input type="password" placeholder="Enter your password" />

                    <label>Confirm Password:</label>
                    <input type="password" placeholder="Confirm your password" />

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;