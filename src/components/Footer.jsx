import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            StageLink
          </Link>

          <p className="footer-tagline">
            Connecting event organizers with extraordinary talent worldwide. Discover singers, DJs, dancers, and speakers for your next event.
          </p>

          <Link to="/become-artist" className="primary-btn footer-cta-btn">
            Become an Artist
          </Link>
        </div>

        <div className="footer-links-group">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore Artists</Link></li>
            <li><Link to="/become-artist">Become an Artist</Link></li>
            <li><Link to="/booking">Book Talent</Link></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Categories</h4>
          <ul>
            <li><Link to="/explore?category=Singer">Singers & Vocalists</Link></li>
            <li><Link to="/explore?category=DJ">DJs & Producers</Link></li>
            <li><Link to="/explore?category=Dancer">Dancers & Troupes</Link></li>
            <li><Link to="/explore?category=Speaker">Speakers & Hosts</Link></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Join Us</h4>
          <ul>
            <li><Link to="/become-artist">Register as Artist</Link></li>
            <li><Link to="/login">Sign In</Link></li>
            <li><Link to="/signup">Create Account</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} StageLink. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
