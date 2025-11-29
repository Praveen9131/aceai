import { FaGraduationCap, FaRocket, FaChalkboardTeacher, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function CampusConnectPreview() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section 
      id="campus-connect-preview" 
      ref={ref} 
      className="section campus-connect-preview" 
      style={{ 
        background: "linear-gradient(135deg, #FFF5F2 0%, #ffffff 100%)",
        padding: "clamp(60px, 10vw, 100px) clamp(24px, 5vw, 64px) clamp(60px, 10vw, 80px)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative Background Elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF6B35' fill-opacity='0.03'%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "64px", maxWidth: "1100px", margin: "0 auto 64px" }}>
          <span 
            className={`training-badge ${isVisible ? "fade-in-up" : ""}`} 
            style={{ 
              display: "inline-block",
              padding: "10px 24px",
              background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
              color: "#ffffff",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              boxShadow: "0 4px 16px rgba(0, 100, 148, 0.3)",
              marginBottom: "28px"
            }}
          >
            🎓 Institutional Partnerships
          </span>
          
          <h2 
            className={`section-title ${isVisible ? "fade-in-up" : ""}`}
            style={{ 
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 800,
              color: "#111827",
              marginBottom: "16px",
lineHeight: 1.1,
                letterSpacing: "-0.02em",
                maxWidth: "960px",
                margin: "0 auto 16px"
              }}
          >
            The future of learning powered by{" "}
            <span style={{ 
              background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              intelligent education.
            </span>
          </h2>
          
          <p 
            className={`section-subtitle ${isVisible ? "fade-in-up" : ""}`}
            style={{ 
              fontSize: "clamp(18px, 2.2vw, 22px)",
color: "#4B5563",
                maxWidth: "780px",
                margin: "8px auto 28px",
                lineHeight: 1.7
            }}
          >
            Empower your students and faculty with AI‑first curricula, hands‑on projects, and industry mentorship. Connect with Campus Connect to build outcomes‑driven education for tomorrow’s jobs.
          </p>
          
          <a
            href="/campus-connect"
            className={isVisible ? "fade-in-up" : ""}
            style={{
              display: "inline-block",
              padding: "16px 36px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
              color: "#ffffff",
              fontSize: "17px",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.01em",
              boxShadow: "0 4px 16px rgba(0, 100, 148, 0.3)",
              marginBottom: "40px"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 100, 148, 0.5)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 100, 148, 0.3)"; }}
          >
            Know More
          </a>

          {/* Stats Preview */}
          <div 
            className={isVisible ? "fade-in-up" : ""}
            style={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: "60px", 
              marginBottom: "60px", 
              flexWrap: "wrap",
              maxWidth: "1000px",
              margin: "48px auto 60px",
            }}
          >
            {[
              { number: "200+", label: "Institutions" },
              { number: "15,000+", label: "Students Trained" },
              { number: "500+", label: "Faculty Partners" },
            ].map((stat, index) => (
              <div 
                key={index}
                style={{ 
                  textAlign: "center",
                  padding: "24px 32px",
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid rgba(0, 100, 148, 0.2)",
                  transition: "all 0.3s ease",
                  minWidth: "180px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 100, 148, 0.2)";
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(0, 100, 148, 0.2)";
                }}
              >
                <div style={{ 
                  fontSize: "36px", 
                  fontWeight: 800, 
                  color: "var(--color-primary)",
                  marginBottom: "8px",
                  lineHeight: "1"
                }}>
                  {stat.number}
                </div>
                <div style={{ 
                  fontSize: "15px", 
                  fontWeight: 600, 
                  color: "#374151",
                  letterSpacing: "0.02em"
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid Preview */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: "clamp(24px, 4vw, 32px)",
            marginBottom: "64px",
            maxWidth: "1200px",
            margin: "0 auto 64px"
          }}
        >
          {[
            {
              icon: <FaGraduationCap />,
              title: "Complete Curriculum Solutions",
              desc: "Industry-aligned training programs from Python to AI, designed by experts.",
            },
            {
              icon: <FaRocket />,
              title: "Career Development & Placement",
              desc: "Comprehensive support from training to job placement with 95%+ success rate.",
            },
            {
              icon: <FaChalkboardTeacher />,
              title: "Faculty Upskilling Programs",
              desc: "Keep your faculty updated with latest industry trends and technologies.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className={isVisible ? "fade-in-up" : ""}
              style={{
                padding: "32px",
                background: "#ffffff",
                borderRadius: "20px",
                border: "2px solid #E5E7EB",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px)";
                e.currentTarget.style.boxShadow = "0 20px 48px rgba(0, 100, 148, 0.2)";
                e.currentTarget.style.borderColor = "#006494";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.04)";
                e.currentTarget.style.borderColor = "#E5E7EB";
              }}
            >
              <div style={{ 
                fontSize: "48px", 
                color: "#006494", 
                marginBottom: "20px",
                transition: "transform 0.3s ease"
              }}>
                {feature.icon}
              </div>
              <h3 style={{ 
                fontSize: "22px", 
                fontWeight: 700,
                marginBottom: "16px",
                color: "#111827",
                lineHeight: "1.3"
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                fontSize: "16px", 
                lineHeight: "1.7", 
                color: "#4B5563",
                marginBottom: "24px"
              }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: "center" }}>
          <Link
            to="/campus-connect"
            className={isVisible ? "fade-in-up" : ""}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "18px 48px",
              background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
              color: "#ffffff",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 16px rgba(0, 100, 148, 0.3)",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 100, 148, 0.5)";
              e.currentTarget.style.gap = "16px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 100, 148, 0.3)";
              e.currentTarget.style.gap = "12px";
            }}
          >
            Learn More About Campus Connect <FaArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CampusConnectPreview;



