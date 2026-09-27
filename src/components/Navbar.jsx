import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
        StageLink
      </Link>

      <button
        className={`mobile-menu-toggle ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/explore" onClick={() => setIsOpen(false)}>Artists</Link>
        <Link to="/become-artist" onClick={() => setIsOpen(false)}>Become an Artist</Link>
        <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
        <Link to="/signup" className="nav-btn-signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
