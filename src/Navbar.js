import React from "react";
import "./App.css";

function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <h2 className="logo">My Client Site</h2>
      <ul className="nav-links">
        <li onClick={() => setPage("home")}>Home</li>
        <li onClick={() => setPage("about")}>About</li>
        <li onClick={() => setPage("contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
