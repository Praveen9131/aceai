import { FaCheck } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import campusImage from "./University Campus with Greenery and Trees.png";
import chatGPTImage from "./ChatGPT Image Nov 22, 2025, 08_02_40 PM.png";

function BusinessEnablement() {
  const [ref, isVisible] = useScrollAnimation();
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const colors = {
    primary: "var(--color-primary)",
    secondary: "var(--color-primary-light)",
    accent: "var(--color-primary-dark)",
    deep: "var(--color-blue)",
    text: "var(--color-gray-900)",
  };

  const images = [
    { 
      src: campusImage, 
      alt: "University Campus",
      heading: "Connect with AceAI Campus"
    },
    { 
      src: chatGPTImage, 
      alt: "ChatGPT",
      heading: "Develop your site with us"
    },
  ];

  useEffect(() => {
    setMounted(true);
    // Change image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const featureCards = [
    { title: "Real-time AI-powered development conversations" },
    { title: "Comprehensive assessment and planning" },
    { title: "Expert development team connection" },
    { title: "Tailored software solutions" },
    { title: "Ongoing collaboration and support" },
  ];

  return (
    <section
      id="business-enablement"
      ref={ref}
      className="section"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#ffffff",
          padding: "clamp(48px, 9vw, 120px) clamp(16px, 5vw, 64px)",
        }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "12%",
          borderRadius: "40px",
          background: "rgba(255,255,255,0.35)",
          boxShadow: "0 40px 80px rgba(17,24,39,0.18)",
          filter: "blur(80px)",
        }}
      />
      {/* Heading */}
      <div style={{ position: "relative", zIndex: 3, maxWidth: "1200px", margin: "0 auto 36px", textAlign: "center" }}>
        <h2
          className={mounted && isVisible ? "fade-in-up" : ""}
          style={{
            fontSize: "clamp(40px, 5.2vw, 58px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--color-primary)",
            margin: 0,
          }}
        >
          Transform Your Ideas Into Intelligent Software Solutions
        </h2>
      </div>

      {/* Two column layout: Image on left, Cards on right */}
      <div
        className="container"
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        <div
          className="business-enablement-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "clamp(24px, 5vw, 64px)",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Left Side - Image and Recharge Box */}
          <div
            className={mounted && isVisible ? "fade-in-up" : ""}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Image Slider */}
            <div
              className="image-slider"
              style={{
                position: "relative",
                width: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                minHeight: "clamp(250px, 40vw, 400px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "auto",
                    minHeight: "clamp(250px, 40vw, 400px)",
                    objectFit: "contain",
                    objectPosition: "center",
                    opacity: currentImageIndex === index ? 1 : 0,
                    transform: currentImageIndex === index ? "scale(1)" : "scale(1.02)",
                    transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                    borderRadius: "16px",
                    pointerEvents: "none",
                  }}
                />
              ))}
            </div>
            
            {/* Recharge Box */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(255, 108, 12, 0.1), rgba(255, 224, 143, 0.08))",
                border: "2px solid var(--color-primary)",
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
                boxShadow: "0 4px 16px rgba(255, 108, 12, 0.15)",
                minHeight: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                key={currentImageIndex}
                style={{
                  fontSize: "clamp(18px, 2.2vw, 22px)",
                  fontWeight: 700,
                  color: "var(--color-gray-900)",
                  margin: 0,
                  lineHeight: 1.4,
                  opacity: 1,
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                {images[currentImageIndex].heading}
              </h3>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div>
            {/* Checklist design */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {featureCards.map((card, i) => {
              const isHighlighted = i === 2; // Third card (Expert development team connection)
              return (
                <div
                  key={i}
                  className={mounted && isVisible ? "fade-in-up" : ""}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    background: "#ffffff",
                    border: isHighlighted 
                      ? "2px solid var(--color-primary)" 
                      : "1px solid rgba(255, 108, 12, 0.2)",
                    borderRadius: "12px",
                    padding: "20px 24px",
                    boxShadow: isHighlighted
                      ? "0 4px 12px rgba(255, 108, 12, 0.2)"
                      : "0 2px 8px rgba(255, 108, 12, 0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!isHighlighted) {
                      e.currentTarget.style.borderColor = "rgba(255, 108, 12, 0.4)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 6px 16px rgba(255, 108, 12, 0.15)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isHighlighted) {
                      e.currentTarget.style.borderColor = "rgba(255, 108, 12, 0.2)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 8px rgba(255, 108, 12, 0.1)";
                    }
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "var(--color-blue)",
                      color: "#ffffff",
                      flexShrink: 0,
                    }}
                  >
                    <FaCheck size={18} />
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(16px, 1.9vw, 20px)",
                      color: "#000000",
                      fontWeight: 500,
                      lineHeight: 1.5,
                    }}
                  >
                    {card.title}
                  </span>
                </div>
              );
            })}
          </div>

            {/* Bottom CTA */}
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  background: "var(--color-primary)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "16px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-primary-dark)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-primary)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessEnablement;



