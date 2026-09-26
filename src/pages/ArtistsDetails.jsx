import { Link, useParams } from "react-router-dom";
import artists from "../data/artists";

function ArtistDetails() {
  const { id } = useParams();
  const fallbackImage = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80";

  const artist = artists.find(
    (artist) => artist.id === Number(id)
  );

  if (!artist) {
    return (
      <main className="artist-details-page">
        <h1>Artist not found</h1>

        <Link to="/explore">
          Back to Explore
        </Link>
      </main>
    );
  }

  return (
    <main className="artist-details-page">
      <div className="artist-profile">

        <img
          src={artist.image || fallbackImage}
          alt={artist.name}
          className="artist-profile-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
        />

        <div className="artist-profile-info">

          <p className="artist-category">
            {artist.category}
          </p>

          <h1>{artist.name}</h1>

          <p className="artist-location">
            📍 {artist.location}
          </p>

          <div className="artist-profile-stats">
            <span>⭐ {artist.rating}</span>
            <span>{artist.events} events</span>
          </div>

          <p className="artist-description">
            {artist.description}
          </p>

          <div className="artist-profile-bottom">
            <strong>
              ₹{artist.price.toLocaleString()}
            </strong>

            <Link
              to={`/booking?artist=${artist.id}`}
              className="primary-btn"
            >
              Book Artist
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}

export default ArtistDetails;
