import { FaShareAlt, FaBrain, FaMagic, FaRobot, FaCode, FaGraduationCap, FaCheck } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const services = [
  {
    icon: <FaGraduationCap />,
    image: "/homeImgs/AI.png",
    title: "Future of Education",
    description: "AI-first curricula and industry-aligned programs for modern learning.",
    features: [
      "AI & GenAI curriculum mapped to industry needs",
      "Faculty enablement and certification programs",
      "Project‑based learning and hackathons",
      "Career services and placement support",
      "LMS setup and analytics for student success",
    ],
  },
  {
    icon: <FaBrain />,
    title: "AI & Machine Learning Solutions",
    description: "Custom AI implementations and intelligent automation for your business.",
    features: [
      "Predictive analytics & forecasting",
      "Data processing & analysis",
      "Custom ML model development",
      "AI automation workflows",
      "Integration & deployment",
    ],
  },
  {
    icon: <FaMagic />,
    title: "Generative AI & LLMs",
    description: "ChatGPT integration and AI-powered content generation solutions.",
    features: [
      "ChatGPT & GPT-4 integration",
      "LLM fine-tuning & customization",
      "Advanced prompt engineering",
      "AI content generation",
      "RAG systems & knowledge bases",
    ],
  },
  {
    icon: <FaRobot />,
    title: "Agentic AI Development",
    description: "Autonomous AI agents that automate complex business processes 24/7.",
    features: [
      "Custom AI agent development",
      "Workflow automation",
      "Intelligent task execution",
      "Multi-tool integration",
      "System monitoring & optimization",
    ],
  },
  {
    icon: <FaCode />,
    title: "Full-Stack Web Development",
    description: "Enterprise-grade web applications with modern frameworks and scalable architecture.",
    features: [
      "Python/Java backend development",
      "React/Vue frontend development",
      "Database design & optimization",
      "API development & integration",
      "Cloud deployment & scaling",
    ],
  },
  {
    icon: <FaGraduationCap />,
    title: "Professional Technical Training",
    description: "Industry-recognized certifications in Python, Java, AI, and Generative AI.",
    features: [
      "Python & Java bootcamps",
      "AI & ML specializations",
      "Generative AI mastery",
      "Hands-on project experience",
      "Job placement assistance",
    ],
  },
];

function Services() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="section services-section">
      <div className="container">
        <h2 className={`section-title ${isVisible ? "fade-in-up" : ""}`} style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, marginBottom: "16px" }}>Our Comprehensive Services</h2>
        <p className={`section-subtitle ${isVisible ? "fade-in-up" : ""}`} style={{ fontSize: "clamp(16px, 1.8vw, 20px)", marginBottom: "48px" }}>
          Tailored solutions for every aspect of your digital transformation
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${isVisible ? "fade-in-up" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Optional image for highlight services */}
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    marginBottom: "16px",
                    border: "1px solid rgba(229,231,235,0.8)",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "rgba(255, 108, 12, 0.1)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    color: "var(--color-primary)",
                    fontSize: "28px",
                  }}
                >
                  {service.icon}
                </div>
              )}
              <h3 style={{ fontSize: "clamp(18px, 2.2vw, 22px)", fontWeight: 600, marginBottom: "12px", lineHeight: 1.3, color: "var(--color-gray-900)" }}>{service.title}</h3>
              <p style={{ fontSize: "clamp(14px, 1.6vw, 16px)", marginBottom: "20px", lineHeight: 1.6, color: "var(--color-gray-600)" }}>{service.description}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                {service.features.map((feature, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "clamp(13px, 1.4vw, 15px)", color: "var(--color-gray-700)" }}>
                    <FaCheck style={{ color: "var(--color-primary)", fontSize: "14px", flexShrink: 0 }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <a href="/services" className="service-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
