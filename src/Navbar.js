import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling
import CommerceLogo from './images/commerce-globe-icon.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src= {CommerceLogo} alt="Commerce Bank Logo" className="logo" />
            <Link to="/signin">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/budget">Budget Tracking</Link>
            <Link to="/payments">Payments</Link>
            <Link to="/contact">Contact Us</Link>
        </div>
    );
}

export default Navbar;