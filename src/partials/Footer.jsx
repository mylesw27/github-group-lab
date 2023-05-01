import React from "react";
import { Link } from "react-router-dom";

export default function Footer () {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> {" | "}
                <Link to="/About">About</Link> {" | "}
            </nav>
        </div>
    )
}