import React from "react";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import {Route,Routes,Link} from 'react-router-dom'

function App() {
    return(
        <div>
            <nav>
                <Link to="/" className="nav-item">Homepage</Link>
                <Link to="/aboutMe" className="nav-item">AboutMe</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/aboutMe" element={<AboutMe/>}/>
            </Routes>
        </div>
    );
};

export default App;
