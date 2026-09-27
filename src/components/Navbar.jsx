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
        <Link to="/become-artist">Become an Artist</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
