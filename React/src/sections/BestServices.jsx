import { FaCheck } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const services = [
  "Real-time AI-powered development conversations",
  "Comprehensive assessment and planning",
  "Expert development team connection",
  "Tailored software solutions",
  "Ongoing collaboration and support",
];

function BestServices() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      style={{
        background: "#ffffff",
        padding: "clamp(60px, 8vw, 120px) 24px",
        position: "relative",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Heading */}
        <h2
          className={isVisible ? "fade-in-up" : ""}
          style={{
            fontSize: "clamp(32px, 4.5vw, 56px)",
            fontWeight: 700,
            color: "var(--color-primary)",
            textAlign: "center",
            marginBottom: "clamp(40px, 6vw, 64px)",
            lineHeight: 1.2,
            maxWidth: "900px",
          }}
        >
          Transform Your Ideas Into Intelligent Software Solutions
        </h2>

        {/* Services Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(16px, 2vw, 24px)",
            width: "100%",
            maxWidth: "600px",
            marginBottom: "clamp(40px, 6vw, 56px)",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={isVisible ? "fade-in-up" : ""}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "clamp(16px, 2.5vw, 24px)",
                background: "#ffffff",
                borderRadius: "16px",
                border: "1px solid var(--color-gray-200)",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                transition: "all 0.3s ease",
                animationDelay: `${index * 100}ms`,
              }}
                onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 108, 12, 0.15)";
                e.currentTarget.style.borderColor = "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.05)";
                e.currentTarget.style.borderColor = "var(--color-gray-200)";
              }}
            >
              {/* Checkmark Icon */}
              <div
                style={{
                  width: "clamp(40px, 5vw, 48px)",
                  height: "clamp(40px, 5vw, 48px)",
                  minWidth: "clamp(40px, 5vw, 48px)",
                  background: "rgba(255, 108, 12, 0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FaCheck
                  style={{
                    color: "var(--color-primary)",
                    fontSize: "clamp(18px, 2.2vw, 22px)",
                  }}
                />
              </div>

              {/* Service Text */}
              <span
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  fontWeight: 500,
                  color: "var(--color-gray-700)",
                  lineHeight: 1.5,
                }}
              >
                {service}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className={isVisible ? "fade-in-up" : ""}
          style={{
            padding: "clamp(14px, 2vw, 18px) clamp(32px, 4vw, 48px)",
            background: "var(--color-primary)",
            color: "var(--color-white)",
            fontSize: "clamp(16px, 2vw, 18px)",
            fontWeight: 600,
            textDecoration: "none",
            borderRadius: "12px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(255, 108, 12, 0.25)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--color-primary-dark)";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 108, 12, 0.35)";
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
    </section>
  );
}

export default BestServices;

