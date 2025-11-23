import { FaCheck } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

const services = [
  "Content Strategy & Planning",
  "Professional Content Creation",
  "Community Management & Engagement",
  "Analytics & Performance Reports",
  "Paid Social Campaigns",
];

const platforms = [
  { icon: <FaInstagram />, name: "Instagram" },
  { icon: <FaFacebook />, name: "Facebook" },
  { icon: <FaTwitter />, name: "Twitter" },
  { icon: <FaLinkedin />, name: "LinkedIn" },
  { icon: <FaTiktok />, name: "TikTok" },
  { icon: <FaYoutube />, name: "YouTube" },
];

function SocialMedia() {
  return (
    <section id="social-media" className="section" style={{ background: "rgba(10, 14, 39, 0.9)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "64px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "48px", fontWeight: 700, marginBottom: "24px" }}>
              Social Media Management That Drives Results
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "32px", lineHeight: 1.7 }}>
              We handle your complete social presence across all platforms, from strategy to execution
            </p>
            <ul style={{ listStyle: "none", marginBottom: "32px" }}>
              {services.map((service, index) => (
                <li key={index} style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px", fontSize: "16px" }}>
                  <FaCheck style={{ color: "#00D9FF", flexShrink: 0 }} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <button className="btn btn-primary">Start Your Social Strategy</button>
          </div>

          <div>
            <div style={{ background: "rgba(42, 42, 62, 0.5)", border: "1px solid rgba(0, 217, 255, 0.2)", borderRadius: "12px", padding: "32px" }}>
              <h3 style={{ fontSize: "24px", marginBottom: "24px", textAlign: "center" }}>Supported Platforms</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "24px" }}>
                {platforms.map((platform, index) => (
                  <div key={index} style={{ textAlign: "center", padding: "16px", borderRadius: "8px", transition: "all 0.3s", cursor: "pointer" }} className="platform-icon">
                    <div style={{ fontSize: "32px", color: "#00D9FF", marginBottom: "8px" }}>{platform.icon}</div>
                    <div style={{ fontSize: "12px", color: "#E8E8E8" }}>{platform.name}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(0, 217, 255, 0.1)", border: "1px solid rgba(0, 217, 255, 0.2)", borderRadius: "8px", padding: "16px", textAlign: "center" }}>
                <div style={{ fontSize: "20px", fontWeight: 700, color: "#00D9FF", marginBottom: "4px" }}>5M+ followers managed</div>
                <div style={{ fontSize: "14px", color: "#E8E8E8" }}>20K+ monthly engagement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;






