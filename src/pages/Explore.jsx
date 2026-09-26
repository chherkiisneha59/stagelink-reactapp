import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import artists from "../data/artists";
import ArtistCard from "../components/ArtistCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

function Explore() {
  const [searchParams] = useSearchParams();
  const catFromUrl = searchParams.get("category");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(catFromUrl || "All");

  useEffect(() => {
    if (catFromUrl) {
      setCategory(catFromUrl);
    }
  }, [catFromUrl]);

  const filteredArtists = artists.filter((artist) => {
    const matchesSearch = artist.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      artist.category.toLowerCase() === category.toLowerCase() ||
      (category.endsWith("s") && artist.category.toLowerCase() === category.slice(0, -1).toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="explore-page">
      <div className="explore-header">
        <p>DISCOVER TALENT</p>

        <h1>Explore Artists</h1>

        <span>Find the perfect artist for your next event.</span>
      </div>

      <div className="explore-controls">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterBar category={category} setCategory={setCategory} />
      </div>

      <div className="artists-grid">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "#a5a5b2", marginTop: "20px" }}>
            No artists found matching your criteria.
          </p>
        )}
      </div>
    </main>
  );
}

export default Explore;
