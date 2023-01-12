import React from "react"
import "../styles/navbar.css"
import logo from "../assets/innovatech.png"


function NavBar() {
    return (
        <div className="topnav">
            <div>
                <img id="logo" src={logo} alt="innoavatech logo"/>
            </div>
        </div>
    );
}

export default NavBar;
