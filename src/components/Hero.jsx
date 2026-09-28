import { useEffect, useRef, useState } from "react";

function Hero() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log("Autoplay deferred:", err);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  // Stage lights & party crowd particle animation canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create dynamic light beams & dance energy particles
    const beams = Array.from({ length: 6 }, (_, i) => ({
      x: (i + 1) * (canvas.width / 7),
      angle: Math.sin(i) * 0.3,
      speed: 0.008 + (i % 3) * 0.004,
      color: i % 2 === 0 ? "rgba(184, 160, 255, 0.15)" : "rgba(56, 178, 172, 0.15)",
      width: 80 + Math.random() * 40,
    }));

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.5 + 1,
      vy: -0.4 - Math.random() * 0.6,
      opacity: Math.random() * 0.6 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw sweeping stage light beams
      beams.forEach((beam) => {
        beam.angle += beam.speed;
        const currentAngle = Math.sin(beam.angle) * 0.4;

        ctx.save();
        ctx.translate(beam.x, 0);
        ctx.rotate(currentAngle);

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, beam.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(-beam.width / 2, 0);
        ctx.lineTo(beam.width * 2, canvas.height);
        ctx.lineTo(-beam.width * 2, canvas.height);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      });

      // Draw floating party sparks
      particles.forEach((p) => {
        p.y += p.vy;
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#b8a0ff";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true));
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="hero">
      <div className="hero-video-container">
        {/* Stage Lights Canvas */}
        <canvas ref={canvasRef} className="hero-canvas" />

        {/* Dynamic Event Dancing People Background Video */}
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          poster="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1920&q=80"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-crowd-of-people-dancing-at-a-concert-4331-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-people-dancing-at-a-party-or-concert-4330-large.mp4"
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

        {/* Dynamic Video & Audio Controls */}
        <div className="hero-controls">
          <button
            onClick={togglePlay}
            className="hero-control-btn"
            title={isPlaying ? "Pause Video" : "Play Video"}
          >
            {isPlaying ? "⏸️ Pause BG Video" : "▶️ Play Event Video"}
          </button>
          <button
            onClick={toggleMute}
            className="hero-control-btn"
            title={isMuted ? "Unmute Sound" : "Mute Sound"}
          >
            {isMuted ? "🔇 Muted" : "🔊 Sound On"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

