import { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback or retry if browser initial play was deferred
      });
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-video-container">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-a-band-playing-on-stage-5264/1080p.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-singing-frontman-with-a-group-in-a-concert-41584-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-dj-mixing-music-at-a-nightclub-41595-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <div className="hero-content">
        <p className="hero-tag">DISCOVER AMAZING TALENT</p>

        <h1>
          Find the Perfect
          <span> Artist </span>
          for Your Event
        </h1>

        <p className="hero-description">
          Discover talented singers, DJs, dancers, speakers and performers
          for weddings, parties, corporate events and more.
        </p>
      </div>
    </section>
  );
}

export default Hero;

