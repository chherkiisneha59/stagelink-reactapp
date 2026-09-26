import { useState } from "react";
import { Link } from "react-router-dom";

function BecomeArtists() {
  const [formData, setFormData] = useState({
    name: "",
    category: "Singer",
    location: "",
    price: "",
    email: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <p>JOIN STAGELINK</p>

          <h1>Become an Artist</h1>

          <span>
            Register your talent and start receiving event booking requests worldwide.
          </span>
        </div>

        {submitted ? (
          <div className="auth-success">
            <h2>Application Submitted!</h2>

            <p>
              Thank you for registering, {formData.name}. Our team will review your portfolio and verify your artist profile.
            </p>

            <Link to="/explore" className="primary-btn">
              Explore Platform
            </Link>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="form-group">
              <label htmlFor="name">Full Name / Stage Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g. Arjun Mehta"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Performance Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="Singer">Singer / Vocalist</option>
                <option value="DJ">DJ / Music Producer</option>
                <option value="Dancer">Dancer / Dance Troupe</option>
                <option value="Speaker">Speaker / Presenter</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="location">City / Base Location</label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="e.g. Mumbai, India"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Starting Fee (₹ per event)</label>
              <input
                id="price"
                name="price"
                type="number"
                placeholder="e.g. 25000"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Contact Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">About Your Performance</label>
              <textarea
                id="description"
                name="description"
                placeholder="Describe your style, experience, and performance highlights..."
                rows="4"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="primary-btn auth-submit">
              Submit Artist Profile
            </button>
          </form>
        )}

        {!submitted && (
          <p className="auth-footer-text">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        )}
      </div>
    </main>
  );
}

export default BecomeArtists;
