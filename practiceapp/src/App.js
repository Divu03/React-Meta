import React from "react";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import {Route,Routes,Link} from 'react-router-dom'
import Contact from "./components/Contact";

function App() {
    return(
        <div>
            <nav>
                <Link to="/" className="nav-item">Homepage</Link>
                <Link to="/aboutMe" className="nav-item">AboutMe</Link>
                <Link to="/contact" className="nav-item">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/aboutMe" element={<AboutMe/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    );
};

export default App;
