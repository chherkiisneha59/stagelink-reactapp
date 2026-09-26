import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <main className="auth-page">
      <div className="auth-container">

        <div className="auth-header">
          <p>JOIN STAGELINK</p>

          <h1>Create an Account</h1>

          <span>
            Create your account and start discovering amazing talent.
          </span>
        </div>

        {submitted ? (
          <div className="auth-success">
            <h2>Account Created!</h2>

            <p>
              Welcome to StageLink, {formData.name}.
            </p>

            <Link
              to="/explore"
              className="primary-btn"
            >
              Explore Artists
            </Link>
          </div>
        ) : (
          <form
            className="auth-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="form-group">
              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
            </div>

            {error && (
              <p className="form-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="primary-btn auth-submit"
            >
              Create Account
            </button>
          </form>
        )}

        {!submitted && (
          <p className="auth-footer-text">
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>
        )}

      </div>
    </main>
  );
}

export default Signup;
