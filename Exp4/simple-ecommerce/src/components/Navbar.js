import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    padding: "15px 20px",
    backgroundColor: "#333",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const hoverStyle = {
    textDecoration: "underline",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle} onMouseOver={e => e.target.style.textDecoration="underline"} onMouseOut={e => e.target.style.textDecoration="none"}>Home</Link>
      <Link to="/products" style={linkStyle} onMouseOver={e => e.target.style.textDecoration="underline"} onMouseOut={e => e.target.style.textDecoration="none"}>Products</Link>
      <Link to="/aboutus" style={linkStyle} onMouseOver={e => e.target.style.textDecoration="underline"} onMouseOut={e => e.target.style.textDecoration="none"}>About Us</Link>
      <Link to="/contact" style={linkStyle} onMouseOver={e => e.target.style.textDecoration="underline"} onMouseOut={e => e.target.style.textDecoration="none"}>Contact</Link>
    </nav>
  );
};

export default Navbar;
