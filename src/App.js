// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import SignInPage from './SignInPage';
import NavBar from './Navbar';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/signin" element={<SignInPage />} />
            </Routes>
        </Router>
    );
}

export default App;