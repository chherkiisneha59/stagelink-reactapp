import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-success">
            <h2>✉️ Message Sent!</h2>
            <p>Thanks for reaching out, {formData.name}.</p>
            <p>We'll get back to you at {formData.email} soon.</p>
            <button
              className="primary-btn"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", inquiryType: "general", message: "" });
              }}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <p>GET IN TOUCH</p>
          <h1>Contact Us</h1>
          <span>Have a question or feedback? We'd love to hear from you.</span>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="inquiryType">Inquiry Type</label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              required
            >
              <option value="general">General Inquiry</option>
              <option value="booking">Artist Booking</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="primary-btn contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
