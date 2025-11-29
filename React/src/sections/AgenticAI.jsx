import { FaHeadset, FaChartLine, FaPenFancy, FaCogs } from "react-icons/fa";

const useCases = [
  {
    icon: <FaHeadset />,
    title: "Customer Support Agents",
    description: "24/7 automated responses, multilingual support, and intelligent issue escalation for seamless customer experience.",
    benefits: [
      "24/7 availability",
      "Multilingual support",
      "Intelligent escalation",
    ],
  },
  {
    icon: <FaChartLine />,
    title: "Data Analysis Agents",
    description: "Automated reports, real-time insights, and predictive analytics to drive data-driven business decisions.",
    benefits: [
      "Automated reporting",
      "Real-time insights",
      "Predictive analytics",
    ],
  },
  {
    icon: <FaPenFancy />,
    title: "Content Generation Agents",
    description: "AI-powered content creation for blogs, social media posts, and email campaigns that engage and convert.",
    benefits: [
      "Blog writing",
      "Social media posts",
      "Email campaigns",
    ],
  },
  {
    icon: <FaCogs />,
    title: "Workflow Automation Agents",
    description: "Business process automation, intelligent task scheduling, and seamless data integration across systems.",
    benefits: [
      "Process automation",
      "Task scheduling",
      "Data integration",
    ],
  },
];

function AgenticAI() {
  return (
    <section id="agentic-ai" className="section" style={{ background: "#ffffff", padding: "clamp(48px, 8vw, 80px) clamp(16px, 5vw, 64px)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}>
          <div style={{ fontSize: "clamp(48px, 8vw, 64px)", color: "var(--color-primary)", marginBottom: "clamp(16px, 3vw, 24px)" }}>🤖</div>
          <h2 className="section-title" style={{ color: "var(--color-gray-900)", fontSize: "clamp(24px, 5vw, 48px)", fontWeight: 700 }}>
            Autonomous AI Agents - The Future of Automation
          </h2>
          <p className="section-subtitle" style={{ color: "var(--color-gray-600)", fontSize: "clamp(14px, 2vw, 18px)" }}>
            Custom-built AI agents that work 24/7 to automate complex business processes
          </p>
        </div>

        <div className="agentic-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "clamp(20px, 3vw, 32px)" }}>
          {useCases.map((useCase, index) => (
            <div
              key={index}
              style={{
                background: "linear-gradient(135deg, rgba(255, 108, 12, 0.1), rgba(255, 224, 143, 0.08))",
                padding: "clamp(20px, 3vw, 32px)",
                borderRadius: "12px",
                minHeight: "auto",
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(255, 108, 12, 0.2)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div style={{ fontSize: "48px", color: "var(--color-primary)", marginBottom: "16px" }}>{useCase.icon}</div>
              <h3 style={{ fontSize: "clamp(20px, 2.5vw, 24px)", marginBottom: "12px", color: "var(--color-gray-900)", fontWeight: 700 }}>
                {useCase.title}
              </h3>
              <p style={{ fontSize: "clamp(14px, 1.6vw, 16px)", lineHeight: 1.7, marginBottom: "20px", flexGrow: 1, color: "var(--color-gray-700)" }}>
                {useCase.description}
              </p>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "12px", color: "var(--color-primary)" }}>
                  Key Benefits:
                </h4>
                <ul style={{ listStyle: "none" }}>
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} style={{ fontSize: "14px", marginBottom: "8px", paddingLeft: "20px", position: "relative", color: "var(--color-gray-700)" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--color-primary)", fontWeight: 600 }}>✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <a 
                href="#" 
                style={{ 
                  color: "var(--color-primary)", 
                  fontWeight: 600, 
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary-dark)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-primary)"}
              >
                Explore This Use Case →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AgenticAI;

