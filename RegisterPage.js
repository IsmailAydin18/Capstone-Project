// RegisterPage.js
import React, { useState } from 'react';
import './RegisterPage.css'; // Import the CSS file for styling

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form submission

        // Dummy validation - Check if all fields are filled
        if (!email || !password || !confirmPassword) {
            setErrorMessage('All fields are required. Please fill them out.');
            return;
        }

        // Dummy validation - Check if password and confirm password match
        if (password !== confirmPassword) {
            setErrorMessage('Password and Confirm Password must match.');
            return;
        }

        // Dummy validation - Check if password meets requirements
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage('Password does not meet the requirements.');
            return;
        }

        // If all validations pass, you can proceed with registration
        console.log('Registration successful');
    };

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
                <form onSubmit={handleSubmit}>
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

                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <button type="submit">Register</button>
                </form>
            </div>
            {errorMessage && (
                <div className="error-box">
                    <p className="error-message">{errorMessage}</p>
                </div>
            )}
        </div>
    );
};

export default RegisterPage;