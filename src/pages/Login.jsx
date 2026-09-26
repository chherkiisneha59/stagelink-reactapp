import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
          <p>WELCOME BACK</p>

          <h1>Login to StageLink</h1>

          <span>
            Sign in to manage your bookings and discover artists.
          </span>
        </div>

        {submitted ? (
          <div className="auth-success">
            <h2>Login Successful!</h2>

            <p>
              Welcome back to StageLink.
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
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
            </div>

            <button
              type="submit"
              className="primary-btn auth-submit"
            >
              Login
            </button>
          </form>
        )}

        {!submitted && (
          <p className="auth-footer-text">
            Don't have an account?{" "}
            <Link to="/signup">
              Create an account
            </Link>
          </p>
        )}

      </div>
    </main>
  );
}

export default Login;
