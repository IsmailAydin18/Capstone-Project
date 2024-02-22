// SignInPage.js
import React from 'react';
import './SignInPage.css'; // Import the CSS file for styling

const SignInPage = () => {
    return (
        <div>
            <div className="content-container">
                <h1>Login</h1>
                <form>
                    <label>Email:</label>
                    <input type="email" placeholder="Enter your email" />

                    <label>Password:</label>
                    <input type="password" placeholder="Enter your password" />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default SignInPage;