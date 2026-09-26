import { Link } from "react-router-dom";

function ArtistCard({ artist }) {
  const fallbackImage = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="artist-card">
      <img
        src={artist.image || fallbackImage}
        alt={artist.name}
        className="artist-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallbackImage;
        }}
      />

      <div className="artist-info">
        <p className="artist-category">
          {artist.category}
        </p>

        <h3>{artist.name}</h3>

        <p className="artist-location">
          📍 {artist.location}
        </p>

        <div className="artist-details">
          <span>⭐ {artist.rating}</span>
          <span>{artist.events} events</span>
        </div>

        <div className="artist-bottom">
          <strong>₹{artist.price.toLocaleString()}</strong>

          <Link
            to={`/artist/${artist.id}`}
            className="view-btn"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
