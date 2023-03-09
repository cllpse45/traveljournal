import React from "react"
import App from "../App";
import navimage from "../images/123.png"
import "./Navbar.css"


function Navbar(){
    return(

        <div className="navbar">
            <img  className="logo-nav" src={navimage} />
            <a className="info-nav" href="https://www.google.com" target="_blank" > my travel journal. </a>
        </div>

    );
}


export default Navbar;

