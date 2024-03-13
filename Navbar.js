import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling
import CommerceLogo from './images/commerce-logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src= {CommerceLogo} alt="Commerce Bank Logo" className="logo" />
            <Link to="/signin" className="primary-button">Login/Sign Up</Link>
            <Link to="">Transactions</Link>
            <Link to="/budget">Budget Tracking</Link>
            <Link to="/payments">Contact</Link>
            <Link to="/contact">Home</Link>
        </div>
    );
}

export default Navbar;