import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        StageLink
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Artists</Link>
        <Link to="/contact">Contact</Link>

      </div>
    </nav>
  );
}

export default Navbar;
