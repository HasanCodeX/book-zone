import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Book Vibe</div>
      <ul className="nav-links">
        <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/listed-books" activeclassname="active">Listed Books</NavLink></li>
        <li><NavLink to="/pages-to-read" activeclassname="active">Pages to Read</NavLink></li>
      </ul>
      <div className="auth-buttons">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
