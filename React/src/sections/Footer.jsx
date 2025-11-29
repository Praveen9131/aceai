import { FaLinkedin, FaYoutube, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Footer() {

  return (
    <footer className="footer" style={{ background: "#1E293B", color: "#ffffff", padding: "clamp(40px, 6vw, 60px) clamp(16px, 5vw, 64px) 0" }}>
      <div className="container">
        {/* Top Section: Logo */}
        <div style={{ 
          marginBottom: "clamp(32px, 5vw, 48px)",
          paddingBottom: "clamp(20px, 3vw, 32px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
        }}>
          {/* Logo */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <img 
                src="/homeImgs/newlogoi.jpg" 
                alt="AceAI Technology" 
                style={{ height: "clamp(40px, 6vw, 50px)", width: "auto" }}
              />
              <span style={{ fontSize: "clamp(16px, 2.5vw, 20px)", fontWeight: 600, color: "#ffffff" }}>AceAI Technology</span>
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", margin: 0, maxWidth: "400px" }}>
              Empowering businesses and individuals with cutting-edge AI solutions, professional training, and innovative software development.
            </p>
          </div>
        </div>

        {/* Main Content: Three Columns */}
        <div className="footer-content" style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
          gap: "clamp(24px, 4vw, 48px)",
          marginBottom: "clamp(32px, 5vw, 48px)"
        }}>
          {/* Left Column: Navigation Links */}
          <div className="footer-column">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "12px" }}>
                <a href="/about" style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
                  About Us
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a href="/contact" style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
                  Contact Us
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a href="/services" style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
                  Services
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a href="#training" style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
                  Training Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Middle Column: More Navigation Links */}
          <div className="footer-column">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "12px" }}>
                <a href="/services" style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
                  AI Solutions
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a href="/services" style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
                  Web Development
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a href="/campus-connect" style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
                  Campus Connect
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a href="#agentic-ai" style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
                  Agentic AI
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Social Media, Compliance, App Downloads */}
          <div className="footer-column">
            {/* Follow Us */}
            <div style={{ marginBottom: "32px" }}>
              <h4 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "16px", color: "#ffffff" }}>Follow Us</h4>
              <div style={{ display: "flex", gap: "16px" }}>
                <a 
                  href="https://www.linkedin.com/company/aceai-softwares/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: "#ffffff", 
                    fontSize: "24px",
                    transition: "color 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: "#ffffff", 
                    fontSize: "24px",
                    transition: "color 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
                >
                  <FaYoutube />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: "#ffffff", 
                    fontSize: "24px",
                    transition: "color 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
                >
                  <FaFacebook />
                </a>
                <a 
                  href="https://www.instagram.com/aceai_1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: "#ffffff", 
                    fontSize: "24px",
                    transition: "color 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ marginBottom: "32px" }}>
              <h4 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "16px", color: "#ffffff" }}>Quick Links</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "8px" }}>
                  <a href="/syllabus" style={{ color: "#ffffff", textDecoration: "none", fontSize: "13px", transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
                    Course Syllabus
                  </a>
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <a href="#training" style={{ color: "#ffffff", textDecoration: "none", fontSize: "13px", transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
                    Career Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "16px", color: "#ffffff" }}>Contact Us</h4>
              
              {/* Address */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#ffffff", fontSize: "13px", lineHeight: 1.6, marginBottom: "16px" }}>
                <FaMapMarkerAlt style={{ color: "var(--color-primary)", fontSize: "16px", marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <p style={{ margin: 0, color: "#ffffff" }}>
                    Office No 09, Third Floor,<br />
                    Akshaya HQ, Old Mahabalipuram Road,<br />
                    Tamilnadu, Pin code: 603103
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#ffffff", fontSize: "13px", marginBottom: "12px" }}>
                <FaPhone style={{ color: "var(--color-primary)", fontSize: "16px", flexShrink: 0 }} />
                <a href="tel:+919962264760" style={{ color: "#ffffff", textDecoration: "none", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
                  9962264760
                </a>
              </div>

              {/* Email */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#ffffff", fontSize: "13px", marginBottom: "12px" }}>
                <FaEnvelope style={{ color: "var(--color-primary)", fontSize: "16px", flexShrink: 0 }} />
                <a href="mailto:director@aceai.in" style={{ color: "#ffffff", textDecoration: "none", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
                  director@aceai.in
                </a>
              </div>

              {/* WhatsApp */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#ffffff", fontSize: "13px" }}>
                <FaWhatsapp style={{ color: "#25D366", fontSize: "16px", flexShrink: 0 }} />
                <a href="https://wa.me/919962264760" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", textDecoration: "none", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#25D366"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
                  9962264760
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal Links */}
        <div className="footer-bottom" style={{ 
          borderTop: "1px solid rgba(255, 255, 255, 0.1)", 
          paddingTop: "24px", 
          paddingBottom: "24px",
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px"
        }}>
          <p style={{ fontSize: "14px", color: "#ffffff", margin: 0 }}>
            © 2025 AceAI Technology. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "16px", fontSize: "14px" }}>
            <a href="#" style={{ color: "#ffffff", textDecoration: "none", transition: "color 0.3s ease" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
              Terms and Conditions
            </a>
            <a href="#" style={{ color: "#ffffff", textDecoration: "none", transition: "color 0.3s ease" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
