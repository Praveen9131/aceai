import { useState, useEffect } from "react";
import { FaWhatsapp, FaCommentDots } from "react-icons/fa";
import { BsChatDots, BsCameraVideo, BsPersonBadge, BsPlayCircle } from "react-icons/bs";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import heroVideo from "../sections/Generating_Video_Of_Opening_Closing_Eyes.mp4";

function Hero() {
  const themes = [
    {
      text: "Transform AI Ideas into",
      highlight: "Reality",
    },
    {
      text: "Transform Your Business with",
      highlight: "GenAI & AI Agents",
    },
    {
      text: "Master Industry-Ready Skills with",
      highlight: "AI",
    },
  ];

  const [currentTheme, setCurrentTheme] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [activeTab, setActiveTab] = useState("chat");

  const navItems = [
    { id: "chat", label: "Chat", icon: <BsChatDots size={20} /> },
    { id: "video", label: "Video", icon: <BsCameraVideo size={20} /> },
    { id: "content", label: "Content", icon: <BsPlayCircle size={20} /> },
    { id: "growth", label: "My Growth", icon: <BsPersonBadge size={20} /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTheme((prev) => (prev + 1) % themes.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [themes.length]);


  return (
    <section id="hero" className="hero-section" style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center", background: "#ffffff", paddingLeft: "clamp(16px, 4vw, 64px)", paddingRight: "clamp(16px, 4vw, 64px)", paddingTop: "clamp(80px, 12vw, 120px)", paddingBottom: "clamp(40px, 6vw, 60px)" }}>
      
      {/* Lottie Animation Background */}
      <div 
        className="lottie-background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          pointerEvents: "none",
          overflow: "hidden",
          width: "100%",
          height: "100%",
        }}
      >
        <DotLottieReact
          src="https://lottie.host/animation/22b10e99-fceb-452d-811b-c1ebbd3f2837"
          loop
          autoplay
          dotLottieRefCallback={(dotLottie) => {
            if (dotLottie) {
              console.log("✅ Lottie animation loaded:", dotLottie);
              dotLottie.addEventListener('ready', () => {
                console.log("✅ Animation ready to play");
                dotLottie.play();
              });
              dotLottie.addEventListener('error', (error) => {
                console.error("❌ Lottie animation error:", error);
              });
            }
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "100%",
            minHeight: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      
      {/* Floating Waves Background - Connected Black Waves (Wood Grain Style) */}
      <div 
        className="waves-background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          pointerEvents: "none",
          overflow: "hidden",
          width: "100%",
          height: "100%",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Connected wavy lines - organic wood grain/topographic pattern */}
          <g style={{ transformOrigin: "0 0" }}>
            {/* Main flowing wave lines - thin, interconnected, continuous */}
            <path
              d="M 0,80 Q 400,120 800,100 T 1600,90 T 1920,85"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="0.08"
              style={{
                animation: "waveFloat 25s ease-in-out infinite",
              }}
            />
            
            <path
              d="M 0,150 Q 500,190 900,170 T 1700,160 T 1920,155"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="0.08"
              style={{
                animation: "waveFloat 30s ease-in-out infinite",
                animationDelay: "2s",
              }}
            />
            
            <path
              d="M 0,220 Q 350,260 700,240 T 1400,230 T 1920,225"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="0.08"
              style={{
                animation: "waveFloat 28s ease-in-out infinite",
                animationDelay: "1s",
              }}
            />
            
            <path
              d="M 0,290 Q 450,330 900,310 T 1800,300 T 1920,295"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="0.08"
              style={{
                animation: "waveFloat 32s ease-in-out infinite",
                animationDelay: "3s",
              }}
            />
            
            <path
              d="M 0,360 Q 300,400 600,380 T 1200,370 T 1920,365"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="0.08"
              style={{
                animation: "waveFloat 27s ease-in-out infinite",
                animationDelay: "1.5s",
              }}
            />
            
            <path
              d="M 0,430 Q 400,470 800,450 T 1600,440 T 1920,435"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="0.08"
              style={{
                animation: "waveFloat 29s ease-in-out infinite",
                animationDelay: "2.5s",
              }}
            />
            
            <path
              d="M 0,500 Q 350,540 700,520 T 1400,510 T 1920,505"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="0.08"
              style={{
                animation: "waveFloat 31s ease-in-out infinite",
                animationDelay: "4s",
              }}
            />
            
            <path
              d="M 0,570 Q 450,610 900,590 T 1800,580 T 1920,575"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="0.08"
              style={{
                animation: "waveFloat 26s ease-in-out infinite",
                animationDelay: "0.5s",
              }}
            />
            
            <path
              d="M 0,640 Q 300,680 600,660 T 1200,650 T 1920,645"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="0.08"
              style={{
                animation: "waveFloat 33s ease-in-out infinite",
                animationDelay: "3.5s",
              }}
            />
            
            <path
              d="M 0,710 Q 400,750 800,730 T 1600,720 T 1920,715"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="0.08"
              style={{
                animation: "waveFloat 24s ease-in-out infinite",
                animationDelay: "1.8s",
              }}
            />
            
            <path
              d="M 0,780 Q 350,820 700,800 T 1400,790 T 1920,785"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="0.08"
              style={{
                animation: "waveFloat 28s ease-in-out infinite",
                animationDelay: "2.8s",
              }}
            />
            
            <path
              d="M 0,850 Q 450,890 900,870 T 1800,860 T 1920,855"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="0.08"
              style={{
                animation: "waveFloat 30s ease-in-out infinite",
                animationDelay: "1.2s",
              }}
            />
            
            <path
              d="M 0,920 Q 300,960 600,940 T 1200,930 T 1920,925"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="0.08"
              style={{
                animation: "waveFloat 27s ease-in-out infinite",
                animationDelay: "2.2s",
              }}
            />
            
            <path
              d="M 0,990 Q 400,1030 800,1010 T 1600,1000 T 1920,995"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="0.08"
              style={{
                animation: "waveFloat 29s ease-in-out infinite",
                animationDelay: "3.2s",
              }}
            />
            
            {/* Additional connecting lines for more organic flow */}
            <path
              d="M 0,115 Q 250,155 500,135 T 1000,125 T 1920,120"
              fill="none"
              stroke="#000000"
              strokeWidth="0.8"
              strokeOpacity="0.06"
              style={{
                animation: "waveFloat 26s ease-in-out infinite",
                animationDelay: "0.8s",
              }}
            />
            
            <path
              d="M 0,185 Q 250,225 500,205 T 1000,195 T 1920,190"
              fill="none"
              stroke="#000000"
              strokeWidth="0.8"
              strokeOpacity="0.06"
              style={{
                animation: "waveFloat 31s ease-in-out infinite",
                animationDelay: "4.2s",
              }}
            />
            
            <path
              d="M 0,255 Q 250,295 500,275 T 1000,265 T 1920,260"
              fill="none"
              stroke="#000000"
              strokeWidth="0.8"
              strokeOpacity="0.06"
              style={{
                animation: "waveFloat 27s ease-in-out infinite",
                animationDelay: "1.3s",
              }}
            />
            
            <path
              d="M 0,325 Q 250,365 500,345 T 1000,335 T 1920,330"
              fill="none"
              stroke="#000000"
              strokeWidth="0.8"
              strokeOpacity="0.06"
              style={{
                animation: "waveFloat 33s ease-in-out infinite",
                animationDelay: "3.8s",
              }}
            />
            
            <path
              d="M 0,395 Q 250,435 500,415 T 1000,405 T 1920,400"
              fill="none"
              stroke="#000000"
              strokeWidth="0.8"
              strokeOpacity="0.06"
              style={{
                animation: "waveFloat 25s ease-in-out infinite",
                animationDelay: "2.1s",
              }}
            />
            
            <path
              d="M 0,465 Q 250,505 500,485 T 1000,475 T 1920,470"
              fill="none"
              stroke="#000000"
              strokeWidth="0.8"
              strokeOpacity="0.06"
              style={{
                animation: "waveFloat 29s ease-in-out infinite",
                animationDelay: "0.3s",
              }}
            />
            
            <path
              d="M 0,535 Q 250,575 500,555 T 1000,545 T 1920,540"
              fill="none"
              stroke="#000000"
              strokeWidth="0.8"
              strokeOpacity="0.06"
              style={{
                animation: "waveFloat 28s ease-in-out infinite",
                animationDelay: "4.5s",
              }}
            />
            
            <path
              d="M 0,605 Q 250,645 500,625 T 1000,615 T 1920,610"
              fill="none"
              stroke="#000000"
              strokeWidth="0.8"
              strokeOpacity="0.06"
              style={{
                animation: "waveFloat 32s ease-in-out infinite",
                animationDelay: "1.7s",
              }}
            />
            
            <path
              d="M 0,675 Q 250,715 500,695 T 1000,685 T 1920,680"
              fill="none"
              stroke="#000000"
              strokeWidth="0.8"
              strokeOpacity="0.06"
              style={{
                animation: "waveFloat 26s ease-in-out infinite",
                animationDelay: "3.1s",
              }}
            />
            
            <path
              d="M 0,745 Q 250,785 500,765 T 1000,755 T 1920,750"
              fill="none"
              stroke="#000000"
              strokeWidth="0.8"
              strokeOpacity="0.06"
              style={{
                animation: "waveFloat 30s ease-in-out infinite",
                animationDelay: "2.4s",
              }}
            />
            
            <path
              d="M 0,815 Q 250,855 500,835 T 1000,825 T 1920,820"
              fill="none"
              stroke="#000000"
              strokeWidth="0.8"
              strokeOpacity="0.06"
              style={{
                animation: "waveFloat 27s ease-in-out infinite",
                animationDelay: "0.6s",
              }}
            />
            
            <path
              d="M 0,885 Q 250,925 500,905 T 1000,895 T 1920,890"
              fill="none"
              stroke="#000000"
              strokeWidth="0.8"
              strokeOpacity="0.06"
              style={{
                animation: "waveFloat 31s ease-in-out infinite",
                animationDelay: "4.8s",
              }}
            />
            
            <path
              d="M 0,955 Q 250,995 500,975 T 1000,965 T 1920,960"
              fill="none"
              stroke="#000000"
              strokeWidth="0.8"
              strokeOpacity="0.06"
              style={{
                animation: "waveFloat 29s ease-in-out infinite",
                animationDelay: "1.9s",
              }}
            />
            
            <path
              d="M 0,1025 Q 250,1065 500,1045 T 1000,1035 T 1920,1030"
              fill="none"
              stroke="#000000"
              strokeWidth="0.8"
              strokeOpacity="0.06"
              style={{
                animation: "waveFloat 28s ease-in-out infinite",
                animationDelay: "3.4s",
              }}
            />
          </g>
        </svg>
      </div>

      <div className="hero-content" style={{ position: "relative", zIndex: 10, maxWidth: "1400px", margin: "0 auto", padding: "0", width: "100%" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(24px, 5vw, 48px)", alignItems: "center" }}>
          {/* Left Section - Text Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px", textAlign: "left" }}>
            {/* Trust Badge */}
            <div style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px",
              padding: "8px 16px",
              background: "rgba(255, 224, 143, 0.2)",
              border: "1px solid rgba(255, 108, 12, 0.3)",
              borderRadius: "50px",
              width: "fit-content",
              marginBottom: "8px"
            }}>
              <span style={{ 
                fontSize: "clamp(11px, 1.2vw, 13px)", 
                fontWeight: 600, 
                color: "var(--color-blue)",
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}>
                ⚡ Trusted by 20,000+ Professionals
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h1
                style={{
                  fontSize: "var(--font-size-hero)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: "var(--color-gray-900)",
                  margin: 0,
                  fontFamily: "var(--font-family-heading)",
                  minHeight: "clamp(120px, 16vw, 180px)",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  letterSpacing: "-0.02em",
                }}
              >
                <span
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    display: "inline-block",
                  }}
                >
                  {themes[currentTheme].text}{" "}
                  <span style={{ 
                    color: "var(--color-primary)",
                  }}>
                    {themes[currentTheme].highlight}
                  </span>
                </span>
              </h1>
              <p
                style={{
                  fontSize: "var(--font-size-body-large)",
                  fontWeight: 400,
                  color: "var(--color-gray-600)",
                  lineHeight: 1.7,
                  margin: "8px 0 0 0",
                  maxWidth: "720px",
                  fontFamily: "var(--font-family)",
                }}
              >
                Empower your business with cutting-edge AI solutions. From Generative AI to autonomous agents, we deliver transformative technology that drives real results.
              </p>
              
              {/* Key Benefits */}
              <div style={{ 
                display: "flex", 
                flexWrap: "wrap", 
                gap: "24px",
                marginTop: "8px"
              }}>
                {[
                  { icon: "✓", text: "Industry-Leading Expertise" },
                  { icon: "✓", text: "Proven Results" },
                  { icon: "✓", text: "24/7 Support" },
                ].map((benefit, index) => (
                  <div key={index} style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "8px",
                    fontSize: "var(--font-size-small)",
                    color: "var(--color-gray-700)",
                    fontWeight: 500
                  }}>
                    <span style={{ 
                      color: "var(--color-primary)", 
                      fontSize: "18px",
                      fontWeight: 600
                    }}>
                      {benefit.icon}
                    </span>
                    <span style={{ color: "var(--color-gray-700)" }}>{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-buttons" style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="/services"
                className="hero-btn-secondary"
                style={{
                  padding: "clamp(12px, 1.8vw, 16px) clamp(20px, 3vw, 36px)",
                  borderRadius: "12px",
                  border: "2px solid var(--color-primary)",
                  background: "transparent",
                  color: "var(--color-primary)",
                  fontSize: "clamp(13px, 1.4vw, 15px)",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.01em",
                  flex: "1 1 auto",
                  minWidth: "160px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-primary-dark)";
                  e.currentTarget.style.background = "rgba(255, 108, 12, 0.05)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 108, 12, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Explore Services <span style={{ fontSize: "18px" }}>&rarr;</span>
              </a>
              <a
                href="/campus-connect"
                className="hero-btn-primary"
                style={{
                  padding: "clamp(12px, 1.8vw, 16px) clamp(20px, 3vw, 36px)",
                  borderRadius: "12px",
                  background: "var(--color-primary)",
                  color: "var(--color-white)",
                  fontSize: "clamp(13px, 1.4vw, 15px)",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.01em",
                  boxShadow: "0 4px 12px rgba(255, 108, 12, 0.25)",
                  flex: "1 1 auto",
                  minWidth: "160px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-primary-dark)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(255, 108, 12, 0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-primary)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 108, 12, 0.25)";
                }}
              >
                Get Started Today
              </a>
            </div>
          </div>

          {/* Right Section - Phone Design with Embedded Video */}
          <div className="hero-phone-container" style={{ 
            position: "relative", 
            width: "100%", 
            minHeight: "clamp(280px, 35vw, 520px)", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center" 
          }}>
            {/* Phone frame */}
            <div
              style={{
                position: "relative",
                width: "min(280px, 36vw)",
                aspectRatio: "9 / 18.5",
                borderRadius: "36px",
                background: "linear-gradient(145deg, #1b1c1f, #2a2b2e)",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.25), 0 2px 0 rgba(255,255,255,0.06) inset, 0 -2px 0 rgba(0,0,0,0.4) inset, 0 0 0 5px rgba(16,16,18,0.9)",
                padding: "12px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Notch */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "36%",
                  height: "18px",
                  background: "linear-gradient(180deg, #0C0C0D 0%, #151518 100%)",
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset, 0 3px 8px rgba(0,0,0,0.35)",
                }}
              />
              {/* Screen */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "24px",
                  overflow: "hidden",
                  background: "#111214",
                  boxShadow:
                    "inset 0 0 0 1px rgba(255,255,255,0.04), inset 0 12px 22px rgba(255,255,255,0.02), inset 0 -16px 24px rgba(0,0,0,0.35)",
                }}
              >
                <video
                  src={heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="Hero demonstration"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Bottom Navigation Bar */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "#ffffff",
                    borderTopLeftRadius: "18px",
                    borderTopRightRadius: "18px",
                    padding: "10px 6px 6px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "3px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "3px 6px",
                        color: activeTab === item.id ? "#1E293B" : "#6B7280",
                        transition: "color 0.2s ease",
                      }}
                    >
                      <div style={{ 
                        color: activeTab === item.id ? "#1E293B" : "#6B7280",
                        transition: "color 0.2s ease"
                      }}>
                        {item.icon}
                      </div>
                      <span style={{ 
                        fontSize: "9px", 
                        fontWeight: 500,
                        color: activeTab === item.id ? "#1E293B" : "#6B7280",
                        transition: "color 0.2s ease"
                      }}>
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              {/* Side buttons */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-2px",
                  top: "70px",
                  width: "3px",
                  height: "32px",
                  background: "linear-gradient(180deg, #2f3033, #1f2022)",
                  borderTopLeftRadius: "2px",
                  borderBottomLeftRadius: "2px",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "-2px",
                  top: "110px",
                  width: "3px",
                  height: "48px",
                  background: "linear-gradient(180deg, #2f3033, #1f2022)",
                  borderTopRightRadius: "2px",
                  borderBottomRightRadius: "2px",
                }}
              />
            </div>
          </div>
        </div>

        {/* Floating Icons - Bottom Right */}
        <div
          style={{
            position: "fixed",
            bottom: "32px",
            right: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            zIndex: 1000,
          }}
        >
          <a
            href="https://wa.me/yournumber"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "28px",
              boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
              transition: "all 0.3s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 211, 102, 0.4)";
            }}
          >
            <FaWhatsapp />
          </a>
          <a
            href="#contact"
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "var(--color-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "24px",
              boxShadow: "0 4px 12px rgba(255, 108, 12, 0.4)",
              transition: "all 0.3s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 108, 12, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 108, 12, 0.4)";
            }}
          >
            <FaCommentDots />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;


