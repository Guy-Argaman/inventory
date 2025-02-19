import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Form from './components/Form/Form';
import StockPage from './pages/StockPage/StockPage';
import { useState } from 'react';


function App() {
    const [activeLink, setActiveLink] = useState({});
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<StockPage />} />
                    <Route path="/form" element={<Form />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
