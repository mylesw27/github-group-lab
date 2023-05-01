import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/photos/maverickslogo.png"

export default function Footer () {
    return (
        <footer>
            <img src={logo} alt="Logo" />

            <nav>
                <Link to="/">Home</Link> {" | "}
                <Link to="/About">About</Link> 
            </nav>

            <p>Copyright © 2023</p>
        </footer>
    )
}