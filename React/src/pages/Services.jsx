import { useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Navbar from "../components/Navbar";
import CTABanner from "../sections/CTABanner";
import Footer from "../sections/Footer";
import { FaShareAlt, FaBrain, FaRobot, FaCode, FaGraduationCap, FaPalette, FaCheck, FaArrowRight } from "react-icons/fa";

// Helper function to get icon gradient colors
const getIconGradient = (colorString) => {
  const gradients = {
    "from-orange-500 to-yellow-500": "linear-gradient(135deg, #F97316, #EAB308)",
    "from-orange-400 to-red-500": "linear-gradient(135deg, #FB923C, #EF4444)",
    "from-purple-400 to-pink-500": "linear-gradient(135deg, #A855F7, #EC4899)",
    "from-cyan-500 to-teal-600": "linear-gradient(135deg, #06B6D4, #0D9488)",
    "from-purple-500 to-indigo-600": "linear-gradient(135deg, #7C3AED, #4F46E5)",
    "from-cyan-400 to-blue-500": "linear-gradient(135deg, #22D3EE, #3B82F6)",
  };
  return gradients[colorString] || "linear-gradient(135deg, #FF6C0C, #F59E0B)";
};

// Services data (single definition)
const services = [
  {
    icon: <FaGraduationCap />,
    title: "Campus Connect",
    description:
      "Transform your institution with cutting-edge AI and technical training programs. Partner with AceAI Technology to empower your students and faculty with industry expertise and prepare your campus for the future.",
    features: [
      "Institutional partnership programs",
      "Custom training curriculum development",
      "Faculty development and upskilling",
      "Student placement assistance",
      "Industry-academia collaboration",
      "LMS and learning platform integration",
      "Ongoing support and mentorship",
    ],
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: <FaCode />,
    title: "End-to-End Website Development",
    description:
      "Complete web solutions from concept to deployment. We deliver scalable, responsive, and high-performance websites tailored to your business needs with cutting-edge technologies.",
    features: [
      "Frontend development with React, Vue, and modern frameworks",
      "Backend architecture and API development",
      "Database design and optimization",
      "Responsive design and mobile optimization",
      "Cloud deployment and hosting solutions",
      "Performance optimization and SEO",
      "Ongoing maintenance and support",
    ],
    color: "from-orange-400 to-red-500",
  },
  {
    icon: <FaPalette />,
    title: "UX/UI Designing",
    description:
      "Create intuitive and engaging user experiences with our expert design team. We transform ideas into beautiful, user-friendly interfaces that drive engagement and conversions.",
    features: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Interaction design and animations",
      "Usability testing and optimization",
      "Design system creation",
      "Responsive design implementation",
    ],
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: <FaRobot />,
    title: "AI Chatbots & GenAI Applications",
    description:
      "Leverage the power of Generative AI to build intelligent chatbots and applications that enhance customer experience and automate interactions 24/7.",
    features: [
      "Custom chatbot development",
      "Large Language Model (LLM) integration",
      "Natural language processing (NLP)",
      "Context-aware conversations",
      "Multi-platform deployment",
      "RAG (Retrieval-Augmented Generation) systems",
      "AI application development",
    ],
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: <FaBrain />,
    title: "AI Agents Development",
    description:
      "Build autonomous AI agents that execute complex tasks, automate workflows, and make intelligent decisions to transform your business operations.",
    features: [
      "Autonomous agent architecture",
      "Multi-agent systems development",
      "Tool integration and orchestration",
      "Workflow automation",
      "Decision-making algorithms",
      "Agent monitoring and optimization",
      "Enterprise AI agent deployment",
    ],
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: <FaShareAlt />,
    title: "Social Media Management",
    description:
      "We handle your complete social presence across all platforms, from strategy to execution. Strategic content creation, community engagement, analytics tracking, and brand growth across all major social platforms.",
    features: [
      "Content Strategy & Planning",
      "Professional Content Creation",
      "Community Management & Engagement",
      "Analytics & Performance Reports",
      "Paid Social Campaigns",
      "Multi-platform management",
      "24/7 social presence",
    ],
    color: "from-cyan-400 to-blue-500",
  },
];

function Services() {
  const [ref, isVisible] = useScrollAnimation();

  useEffect(() => {
    document.title = "Services - AceAI Technology";
    document.body.style.background = "#ffffff";
    return () => {
      document.body.style.background = "";
      document.title = "AceAI Technology - AI Solutions, Training & Development";
    };
  }, []);

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navbar />
      <section ref={ref} style={{ paddingTop: "clamp(100px, 12vw, 120px)", paddingBottom: "clamp(40px, 6vw, 60px)" }}>
        <div className="container" style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 64px)" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 5vw, 60px)" }}>
            <div
              className={isVisible ? "fade-in-up" : ""}
              style={{
                display: "inline-block",
                background: "rgba(255, 108, 12, 0.1)",
                border: "1px solid rgba(255, 108, 12, 0.3)",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "clamp(11px, 1.2vw, 13px)",
                fontWeight: 600,
                color: "var(--color-primary)",
                marginBottom: "16px",
              }}
            >
              ⚡ COMPREHENSIVE SOLUTIONS
            </div>
            <h1
              className={isVisible ? "fade-in-up" : ""}
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 700,
                color: "var(--color-gray-900)",
                marginBottom: "12px",
                lineHeight: 1.2,
              }}
            >
              Our Comprehensive Services
            </h1>
            <p
              className={isVisible ? "fade-in-up" : ""}
              style={{
                fontSize: "clamp(15px, 1.7vw, 18px)",
                fontWeight: 400,
                color: "var(--color-gray-600)",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Tailored solutions for every aspect of your digital transformation. From AI implementation to institutional partnerships, we deliver excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: "clamp(20px, 2.5vw, 28px)",
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card-white ${isVisible ? "fade-in-up" : ""}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  background: "#ffffff",
                  border: "1px solid #E5E7EB",
                  borderRadius: "16px",
                  padding: "clamp(24px, 3vw, 36px) clamp(20px, 2.5vw, 28px)",
                  minHeight: "auto",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(255, 108, 12, 0.15)";
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.borderColor = "#E5E7EB";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "clamp(56px, 6vw, 64px)",
                    height: "clamp(56px, 6vw, 64px)",
                    background: getIconGradient(service.color),
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    color: "#ffffff",
                    fontSize: "clamp(28px, 3vw, 32px)",
                    flexShrink: 0,
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "clamp(18px, 2.2vw, 22px)",
                    fontWeight: 600,
                    color: "var(--color-gray-900)",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "clamp(14px, 1.6vw, 16px)",
                    fontWeight: 400,
                    color: "var(--color-gray-600)",
                    lineHeight: 1.6,
                    marginBottom: service.features.length > 0 ? "16px" : "0",
                    flexGrow: 1,
                  }}
                >
                  {service.description}
                </p>

                {/* Features */}
                {service.features.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "clamp(6px, 0.8vw, 8px)", marginBottom: "16px", marginTop: "0" }}>
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontSize: "clamp(13px, 1.4vw, 15px)",
                          color: "var(--color-gray-700)",
                          padding: "6px 10px",
                          background: "rgba(255, 108, 12, 0.05)",
                          borderRadius: "6px",
                          border: "1px solid rgba(255, 108, 12, 0.1)",
                        }}
                      >
                        <FaCheck
                          style={{
                            color: "var(--color-primary)",
                            fontSize: "13px",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        />
                        <span style={{ lineHeight: 1.5 }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "var(--color-primary)",
                    fontWeight: 600,
                    fontSize: "clamp(14px, 1.5vw, 16px)",
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = "12px";
                    e.currentTarget.style.color = "var(--color-primary-dark)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = "8px";
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                >
                  Learn More <FaArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </div>
  );
}

export default Services;

