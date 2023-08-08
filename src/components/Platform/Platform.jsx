import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Platform() {
    return (
        <div>
            <h2>The platform, make your wish being real</h2>
            <p>Enjoy the trade !</p>
            <nav>
                <Link to="/platform/lien-1">Lien n°1</Link>
                <Link to="/platform/lien-2">Lien n°2</Link>
                <Link to="/platform/lien-3">Lien n°3</Link>
            </nav>
            <Outlet />
        </div>
    );
}
