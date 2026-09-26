import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import dancerImg from "../assets/artists/dancer1.jpg";
import singerImg from "../assets/artists/singer1.jpg";
import djImg from "../assets/artists/dj1.jpg";

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
            image={singerImg}
            category="Singer"
          />

          <CategoryCard
            icon="🎧"
            title="DJs"
            count="85"
            image={djImg}
            category="DJ"
          />

          <CategoryCard
            icon="💃"
            title="Dancers"
            count="65"
            image={dancerImg}
            category="Dancer"
          />

          <CategoryCard
            icon="🎙️"
            title="Speakers"
            count="40"
            image="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
            category="Speaker"
          />
        </div>
      </section>
    </>
  );
}

export default Home;