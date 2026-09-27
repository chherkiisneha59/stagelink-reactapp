import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            StageLink
          </Link>
          <p>Connecting event organizers with extraordinary performing talent.</p>
        </div>

        <div className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/explore">Artists</Link>
          <Link to="/become-artist">Become an Artist</Link>
          <Link to="/login">Sign In</Link>
        </div>

        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} StageLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
