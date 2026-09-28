import { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Autoplay deferred:", err);
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

  return (
    <section className="hero">
      <div className="hero-video-container">
        {/* Stage Lights Canvas */}
        <canvas ref={canvasRef} className="hero-canvas" />

        {/* Storyblocks Concert Audience Strobe Lights Video Background */}
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
        >
          <source src="/concert-bg.mp4" type="video/mp4" />
          <source
            src="https://d2j2uxe7jasn0r.cloudfront.net/watermarks/video/5PNlDRM/694ec4305740640cc28d83e5-8nmluy1n49__faf173a3a6bf4447af16f53fa7347f57__P1080.mp4"
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
