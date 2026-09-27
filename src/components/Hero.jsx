import { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Playback deferred by browser
        });
      }
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-video-container">
        {/* Real Live Event & Stage Performance Video */}
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
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
            type="video/mp4"
          />
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
            type="video/mp4"
          />
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
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

