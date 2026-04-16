import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";
import heroImage from "../../assets/Hero/Hero2.jpg";

function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1 className="slide-in-left">
            Give Hope.<br />
            Give Education.<br />
            Give a Future.
          </h1>

          <p className="slide-in-right">
            Every Child Deserves a Chance to Dream.
          </p>

          <div className="hero-buttons fade-in">
            {/* Donate button → takes to donate page */}
            <a href="/donate" className="donate-btn no-underline">
              Donate Now
            </a>

            {/* Learn more → opens video */}
            <button
              className="learn-btn"
              onClick={() => setShowVideo(true)}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* === Video Modal === */}
      {showVideo && (
        <div className="video-modal" onClick={() => setShowVideo(false)}>
          <div
            className="video-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 👇 Replace the video ID below with any working YouTube video */}
            <iframe
              src="https://www.youtube.com/embed/1Ne1hqOXKKI?autoplay=1"
              title="Learn More Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <button className="close-btn" onClick={() => setShowVideo(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
