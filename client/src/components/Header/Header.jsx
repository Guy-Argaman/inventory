
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    return (
        <header className="App-header">
            <nav>
                <Link to="/" className={`${location.pathname === '/' ? 'active' : ''}`}>Stock Page</Link>
                <Link to="/form" className={`${location.pathname === '/form' ? 'active' : ''}`}>Form Page</Link>
            </nav>
        </header>
    );
}

export default Header;
