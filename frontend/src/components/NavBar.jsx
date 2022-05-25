import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar(){
return <nav className="navbar bg-dark container">
    
    <h4><Link className="link" to="/" >Create Quiz</Link></h4>
    <br />
    <h4><Link className="link" to="/show" >Data</Link></h4>
    <br />
    <h4><Link className="link" to="/quiz">Quiz</Link></h4>
    
</nav>
}

export default Navbar;