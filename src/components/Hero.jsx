import { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Animated Concert & Corporate Event Stage Spotlights
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
      angle += 0.02;
      const width = canvas.width;
      const height = canvas.height;

      ctx.fillStyle = "rgba(12, 12, 18, 0.2)";
      ctx.fillRect(0, 0, width, height);

      // Sweeping stage lights
      const beamColors = [
        ["rgba(184, 160, 255, 0.5)", "rgba(120, 80, 255, 0.2)"],
        ["rgba(255, 100, 200, 0.5)", "rgba(255, 50, 150, 0.2)"],
        ["rgba(100, 220, 255, 0.5)", "rgba(40, 140, 255, 0.2)"],
        ["rgba(255, 200, 100, 0.4)", "rgba(255, 120, 40, 0.15)"],
      ];

      for (let i = 0; i < 4; i++) {
        const xPos = (width / 5) * (i + 1);
        const beamAngle = Math.sin(angle + i * 1.2) * 0.4;

        ctx.save();
        ctx.translate(xPos, 0);
        ctx.rotate(beamAngle);

        const gradient = ctx.createLinearGradient(0, 0, 0, height * 1.2);
        gradient.addColorStop(0, beamColors[i % 4][0]);
        gradient.addColorStop(0.5, beamColors[i % 4][1]);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(-25, 0);
        ctx.lineTo(25, 0);
        ctx.lineTo(140, height * 1.3);
        ctx.lineTo(-140, height * 1.3);
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

        {/* Live Event & Performer Video Stream */}
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
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
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

