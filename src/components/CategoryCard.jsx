import { Link } from "react-router-dom";

function CategoryCard({ icon, title, count, image, category }) {
  const targetCategory = category || title;

  return (
    <Link to={`/explore?category=${encodeURIComponent(targetCategory)}`} className="category-card">
      <div className="category-card-image-container">
        <img src={image} alt={title} className="category-card-image" />
        <div className="category-card-overlay" />
      </div>

      <div className="category-card-info">
        <div className="category-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{count} Artists</p>
      </div>
    </Link>
  );
}

export default CategoryCard;
