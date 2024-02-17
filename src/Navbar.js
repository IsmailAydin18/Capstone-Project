// NavBar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import logo from './images/commerce-globe-icon.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src= {logo} alt = "Commerce Bank Logo" className= "logo" />
            <a href="#">Login</a>
            <a href="#">Register</a>
            <a href="#">Budget Tracking</a>
            <a href="#">Payments</a>
            <a href="#">Contact Us</a>
        </div>
    );
}

export default Navbar;