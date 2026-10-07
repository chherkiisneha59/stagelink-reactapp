import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import artists from "../data/artists";

function Booking() {
  const [searchParams] = useSearchParams();
  const initialArtistId = searchParams.get("artist") ? Number(searchParams.get("artist")) : "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    artistId: initialArtistId,
    date: "",
    time: "",
    place: "",
    address: "",
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

  const selectedArtist = artists.find(a => a.id === Number(formData.artistId));

  return (
    <main className="booking-page">
      <div className="booking-container">

        <div className="booking-header">
          <p>BOOK ARTIST</p>
          <h1>{selectedArtist ? `Book ${selectedArtist.name}` : "Book an Artist"}</h1>
          <span>
            Send your event details and request a booking.
          </span>
        </div>

        {submitted ? (
          <div className="booking-success">
            <h2>Booking Request Sent!</h2>
            <p>
              Your request for {selectedArtist ? selectedArtist.name : "the artist"} has been submitted.
            </p>
            <p>
              We will contact you with the next steps.
            </p>
            <button 
              className="primary-btn" 
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  ...formData,
                  date: "",
                  time: "",
                  place: "",
                  address: "",
                  eventType: "",
                  message: ""
                });
              }}
              style={{ marginTop: '20px' }}
            >
              Book Another Event
            </button>
          </div>
        ) : (
          <form
            className="booking-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="artistId">Select Artist</label>
              <select
                id="artistId"
                name="artistId"
                value={formData.artistId}
                onChange={handleChange}
                required
              >
                <option value="">-- Choose an Artist --</option>
                {artists.map((artist) => (
                  <option key={artist.id} value={artist.id}>
                    {artist.name} ({artist.category})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
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
              <label htmlFor="email">Email</label>
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

            <div className="form-group" style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="date">Event Date</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="time">Event Time</label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="place">Venue / Place Name</label>
              <input
                id="place"
                name="place"
                type="text"
                placeholder="E.g. Grand Hotel"
                value={formData.place}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Full Address</label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Enter full address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="eventType">Event Type</label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="">Select event type</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday">Birthday Party</option>
                <option value="Corporate">Corporate Event</option>
                <option value="Concert">Concert</option>
                <option value="Private Party">Private Party</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Details</label>
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
