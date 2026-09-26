import { useSearchParams } from "react-router-dom";
import { useState } from "react";

import artists from "../data/artists";

function Booking() {
  const [searchParams] = useSearchParams();

  const artistId = Number(searchParams.get("artist"));

  const artist = artists.find(
    (artist) => artist.id === artistId
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    eventType: "",
    message: "",
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

  if (!artist) {
    return (
      <main className="booking-page">
        <h1>Artist not found</h1>
      </main>
    );
  }

  return (
    <main className="booking-page">
      <div className="booking-container">

        <div className="booking-header">
          <p>BOOK ARTIST</p>

          <h1>Book {artist.name}</h1>

          <span>
            Send your event details and request a booking.
          </span>
        </div>

        {submitted ? (
          <div className="booking-success">
            <h2>Booking Request Sent!</h2>

            <p>
              Your request for {artist.name} has been submitted.
            </p>

            <p>
              We will contact you with the next steps.
            </p>
          </div>
        ) : (
          <form
            className="booking-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
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
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">
                Event Date
              </label>

              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="eventType">
                Event Type
              </label>

              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select event type
                </option>

                <option value="Wedding">
                  Wedding
                </option>

                <option value="Birthday">
                  Birthday Party
                </option>

                <option value="Corporate">
                  Corporate Event
                </option>

                <option value="Concert">
                  Concert
                </option>

                <option value="Private Party">
                  Private Party
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Additional Details
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell the artist about your event..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="primary-btn booking-submit"
            >
              Send Booking Request
            </button>
          </form>
        )}

      </div>
    </main>
  );
}

export default Booking;
