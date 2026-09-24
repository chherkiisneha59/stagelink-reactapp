import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <>
      <Hero />

      <section className="categories-section">
        <div className="section-heading">
          <p>EXPLORE</p>

          <h2>Find Artists by Category</h2>

          <span>
            Discover the perfect talent for your next event.
          </span>
        </div>

        <div className="categories-grid">
          <CategoryCard
            icon="🎤"
            title="Singers"
            count="120"
          />

          <CategoryCard
            icon="🎧"
            title="DJs"
            count="85"
          />

          <CategoryCard
            icon="💃"
            title="Dancers"
            count="65"
          />

          <CategoryCard
            icon="🎙️"
            title="Speakers"
            count="40"
          />
        </div>
      </section>
    </>
  );
}

export default Home;