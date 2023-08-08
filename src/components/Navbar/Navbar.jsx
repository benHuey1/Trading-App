import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/my-account">My Account</Link>
            <Link to="/platform">Platform</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}