function FilterBar({ category, setCategory }) {
  return (
    <div className="filter-bar">
      <label htmlFor="category">
        Category
      </label>

      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Artists</option>
        <option value="Singer">Singers</option>
        <option value="DJ">DJs</option>
        <option value="Dancer">Dancers</option>
        <option value="Speaker">Speakers</option>
      </select>
    </div>
  );
}

export default FilterBar;
