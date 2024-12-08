import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">BookZone</h1>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listed-books">Listed Books</NavLink></li>
        <li><NavLink to="/pages-to-read">Pages to Read</NavLink></li>
      </ul>
      <button>Sign In</button>
      <button>Sign Up</button>
    </nav>
  );
};

export default Navbar;
