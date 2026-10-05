import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            StageLink
          </Link>
          <p>Connecting event organizers with extraordinary performing talent. Elevate your next event with us.</p>
        </div>

        <div className="footer-links-group">
          <div className="footer-links">
            <h4>Explore</h4>
            <Link to="/explore">Find Artists</Link>
            <Link to="/become-artist">Join as Artist</Link>
            <Link to="/booking">Book Now</Link>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <Link to="/">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} StageLink. All rights reserved.</p>
        <div className="footer-socials">
          <a href="#" aria-label="Twitter">Twitter</a>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
