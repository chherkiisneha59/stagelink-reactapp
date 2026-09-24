function CategoryCard({ icon, title, count }) {
  return (
    <div className="category-card">
      <div className="category-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{count} Artists</p>
    </div>
  );
}

export default CategoryCard;
