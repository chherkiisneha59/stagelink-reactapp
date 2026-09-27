import { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Animated Stage Spotlights Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
        canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let angle = 0;
    const render = () => {
      angle += 0.015;
      const width = canvas.width;
      const height = canvas.height;

      ctx.fillStyle = "rgba(15, 15, 20, 0.25)";
      ctx.fillRect(0, 0, width, height);

      // Dynamic concert spotlight beams
      for (let i = 0; i < 4; i++) {
        const xPos = (width / 5) * (i + 1);
        const beamAngle = Math.sin(angle + i * 1.5) * 0.35;

        ctx.save();
        ctx.translate(xPos, 0);
        ctx.rotate(beamAngle);

        const gradient = ctx.createLinearGradient(0, 0, 0, height * 1.2);
        if (i % 2 === 0) {
          gradient.addColorStop(0, "rgba(184, 160, 255, 0.4)");
          gradient.addColorStop(0.5, "rgba(120, 80, 255, 0.15)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        } else {
          gradient.addColorStop(0, "rgba(255, 120, 200, 0.4)");
          gradient.addColorStop(0.5, "rgba(255, 60, 150, 0.15)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(-20, 0);
        ctx.lineTo(20, 0);
        ctx.lineTo(120, height * 1.2);
        ctx.lineTo(-120, height * 1.2);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Force Video Playback
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
        {/* Stage Lighting Canvas Background */}
        <canvas ref={canvasRef} className="hero-canvas" />

        {/* Live Video Stream */}
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
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
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

