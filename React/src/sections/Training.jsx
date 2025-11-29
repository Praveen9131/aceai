import { FaCode, FaPalette, FaRobot, FaBrain, FaShareAlt, FaGraduationCap, FaCheck, FaArrowRight } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import chatGPTImage from "./ChatGPT Image Nov 22, 2025, 08_18_59 PM.png";
import uxUIImage from "./ChatGPT Image Nov 22, 2025, 08_24_07 PM.png";
import websiteDevImage from "./ChatGPT Image Nov 22, 2025, 08_33_59 PM.png";
import campusConnectImage from "./ChatGPT Image Nov 22, 2025, 08_36_49 PM.png";
import aiChatbotsImage from "./ChatGPT Image Nov 22, 2025, 08_38_24 PM.png";
import socialMediaImage from "./ChatGPT Image Nov 22, 2025, 08_40_11 PM.png";

function Training() {
  const [ref, isVisible] = useScrollAnimation();

  const services = [
    {
      icon: <FaGraduationCap />,
      title: "Campus Connect",
      description: "Transform your institution with cutting-edge AI and technical training programs. Partner with Aceai to empower your students and faculty with industry expertise and prepare your campus for the future.",
      image: campusConnectImage,
      features: [
        "Institutional partnership programs",
        "Custom training curriculum development",
        "Faculty development and upskilling",
        "Student placement assistance",
        "Industry-academia collaboration",
        "LMS and learning platform integration",
        "Ongoing support and mentorship",
      ],
    },
    {
      icon: <FaCode />,
      title: "End-to-End Website Development",
      description: "Complete web solutions from concept to deployment. We deliver scalable, responsive, and high-performance websites tailored to your business needs with cutting-edge technologies.",
      image: websiteDevImage,
      features: [
        "Frontend development with modern frameworks",
        "Backend architecture and API development",
        "Database design and optimization",
        "Responsive design and mobile optimization",
        "Cloud deployment and hosting",
        "Performance optimization and SEO",
        "Ongoing maintenance and support",
      ],
    },
    {
      icon: <FaPalette />,
      title: "UX/UI Designing",
      description: "Create intuitive and engaging user experiences with our expert design team. We transform ideas into beautiful, user-friendly interfaces that drive engagement and conversions.",
      image: uxUIImage,
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Interaction design and animations",
        "Usability testing and optimization",
        "Design system creation",
        "Responsive design implementation",
      ],
    },
    {
      icon: <FaRobot />,
      title: "AI Chatbots & GenAI Applications",
      description: "Leverage the power of Generative AI to build intelligent chatbots and applications that enhance customer experience and automate interactions 24/7.",
      image: aiChatbotsImage,
      features: [
        "Custom chatbot development",
        "Large Language Model (LLM) integration",
        "Natural language processing (NLP)",
        "Context-aware conversations",
        "Multi-platform deployment",
        "RAG (Retrieval-Augmented Generation) systems",
        "AI application development",
      ],
    },
    {
      icon: <FaBrain />,
      title: "AI Agents Development",
      description: "Build autonomous AI agents that execute complex tasks, automate workflows, and make intelligent decisions to transform your business operations.",
      image: chatGPTImage,
      features: [
        "Autonomous agent architecture",
        "Multi-agent systems development",
        "Tool integration and orchestration",
        "Workflow automation",
        "Decision-making algorithms",
        "Agent monitoring and optimization",
        "Enterprise AI agent deployment",
      ],
    },
    {
      icon: <FaShareAlt />,
      title: "Social Media Management",
      description: "We handle your complete social presence across all platforms, from strategy to execution. Strategic content creation, community engagement, analytics tracking, and brand growth across all major social platforms.",
      image: socialMediaImage,
      features: [
        "Content Strategy & Planning",
        "Professional Content Creation",
        "Community Management & Engagement",
        "Analytics & Performance Reports",
        "Paid Social Campaigns",
        "Multi-platform management",
        "24/7 social presence",
      ],
    },
  ];

  return (
    <section id="training" ref={ref} className="section training-section" style={{ background: "#ffffff", padding: "clamp(60px, 10vw, 100px) clamp(16px, 5vw, 64px)" }}>
      <div className="container">
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "48px", maxWidth: "900px", margin: "0 auto 48px" }}>
          <span 
            className="training-badge" 
            style={{ 
              display: "inline-block",
              padding: "8px 20px",
              background: "var(--color-primary)",
              color: "#ffffff",
              borderRadius: "24px",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "24px"
            }}
          >
            Our Services
          </span>
          
          <h1 
            className={`section-title ${isVisible ? "fade-in-up" : ""}`} 
            style={{ 
              fontSize: "clamp(36px, 4.5vw, 48px)",
              fontWeight: 800,
              color: "#111827",
              marginTop: "0",
              marginBottom: "24px",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              fontFamily: "sans-serif"
            }}
          >
            Professional Services
          </h1>
          
          {/* Enhanced Description with Styling */}
          <div 
            className={`section-subtitle ${isVisible ? "fade-in-up" : ""}`} 
            style={{ 
              margin: "0 auto",
              maxWidth: "900px",
              textAlign: "center"
            }}
          >
            <div style={{
              fontSize: "clamp(20px, 2.2vw, 24px)",
              lineHeight: "1.5",
              fontWeight: 500,
              color: "#1F2937",
              letterSpacing: "-0.01em",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}>
              <p style={{ 
                margin: "0",
                background: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                <span style={{ fontWeight: 600, color: "#1F2937" }}>Comprehensive digital solutions</span> tailored to{" "}
                <span style={{ 
                  color: "var(--color-primary)", 
                  fontWeight: 700,
                  position: "relative"
                }}>
                  elevate your business
                </span>
              </p>
              
              <p style={{ 
                margin: "0",
                color: "#4B5563",
                fontSize: "clamp(19px, 2.1vw, 23px)"
              }}>
                with{" "}
                <span style={{ 
                  color: "var(--color-primary)", 
                  fontWeight: 600,
                  position: "relative"
                }}>
                  cutting-edge technology
                </span>{" "}
                and expertise that{" "}
                <span style={{ 
                  color: "#0099cc", 
                  fontWeight: 600
                }}>
                  drives real results
                </span>
              </p>
              
              <p style={{ 
                margin: "0",
                color: "#1F2937",
                fontSize: "clamp(20px, 2.2vw, 24px)",
                fontWeight: 600
              }}>
                and transforms your{" "}
                <span style={{ 
                  background: "linear-gradient(135deg, var(--color-primary) 0%, #ff8c42 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 700
                }}>
                  digital presence
                </span>{" "}
                into a{" "}
                <span style={{ 
                  color: "#0099cc", 
                  fontWeight: 700,
                  textDecoration: "underline",
                  textDecorationColor: "rgba(0, 153, 204, 0.3)",
                  textUnderlineOffset: "4px"
                }}>
                  competitive advantage
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid - 3 columns */}
        <div className="training-services-grid" style={{ 
          maxWidth: "1400px", 
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(20px, 3vw, 32px)",
          alignItems: "stretch",
        }}>
          {services.map((service, index) => {
            // UX/UI Designing (index 2) should be highlighted
            const isHighlighted = index === 2;
            return (
            <div
              key={index}
              style={{
                background: "#ffffff",
                border: isHighlighted ? "2px solid rgba(255, 108, 12, 0.3)" : "1px solid #E5E7EB",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                boxShadow: isHighlighted 
                  ? "0 4px 16px rgba(0, 0, 0, 0.08)" 
                  : "0 2px 8px rgba(0, 0, 0, 0.04)",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.12)";
                if (!isHighlighted) {
                  e.currentTarget.style.borderColor = "rgba(255, 108, 12, 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = isHighlighted 
                  ? "0 4px 16px rgba(0, 0, 0, 0.08)" 
                  : "0 2px 8px rgba(0, 0, 0, 0.04)";
                if (!isHighlighted) {
                  e.currentTarget.style.borderColor = "#E5E7EB";
                }
              }}
            >
              {/* Service Image - Only for services with image (replaces icon) */}
              {service.image ? (
                <div style={{ 
                  marginBottom: "20px", 
                  width: "100%", 
                  borderRadius: "12px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  overflow: "hidden",
                  height: "200px",
                  background: "#F9FAFB",
                  padding: "8px",
                  flexShrink: 0,
                }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "8px",
                      display: "block",
                    }}
                  />
                </div>
              ) : (
                /* Icon Section - Only for services without image */
                <div style={{ marginBottom: "24px", height: "200px", display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
                      borderRadius: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      fontSize: "36px",
                      boxShadow: "0 8px 24px rgba(255, 108, 12, 0.25)",
                    }}
                  >
                    {service.icon}
                  </div>
                </div>
              )}

              {/* Content Section */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <h2
                  style={{
                    fontSize: "clamp(22px, 2.5vw, 26px)",
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: "12px",
                    lineHeight: "1.3",
                    letterSpacing: "-0.01em",
                    minHeight: "65px",
                  }}
                >
                  {service.title}
                </h2>

                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "#4B5563",
                    lineHeight: "1.6",
                    marginBottom: "24px",
                    flex: 1,
                  }}
                >
                  {service.description}
                </p>

                {/* CTA Button */}
                <a
                  href="/services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "12px 24px",
                    background: "#0099cc",
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    letterSpacing: "0.01em",
                    marginTop: "auto",
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0077aa";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 153, 204, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#0099cc";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Learn More →
                </a>
              </div>
            </div>
            );
          })}
        </div>

        {/* Our Approach Section - Wireframe Style */}
        <div style={{ marginTop: "120px", maxWidth: "1400px", margin: "120px auto 0" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span 
              style={{ 
                display: "inline-block",
                padding: "8px 20px",
                background: "var(--color-primary)",
                color: "#ffffff",
                borderRadius: "24px",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "24px"
              }}
            >
              Our Approach
            </span>
            
            <h2 
              style={{ 
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                color: "#111827",
                marginTop: "0",
                marginBottom: "20px",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
              }}
            >
              How We Work
            </h2>
            
            <p 
              style={{ 
                fontSize: "18px",
                color: "#6B7280",
                lineHeight: "1.6",
                maxWidth: "700px",
                margin: "0 auto 48px",
                fontWeight: 400
              }}
            >
              A structured methodology that ensures successful project delivery from conception to deployment
            </p>

            {/* What We Deliver Section */}
            <div style={{ 
              maxWidth: "1000px", 
              margin: "0 auto clamp(40px, 6vw, 64px)",
              background: "#FFF5F2",
              border: "1px solid rgba(255, 108, 12, 0.2)",
              borderRadius: "16px",
              padding: "clamp(24px, 4vw, 40px) clamp(20px, 4vw, 48px)"
            }}>
              <h3 style={{ 
                fontSize: "clamp(20px, 3vw, 24px)", 
                fontWeight: 700, 
                color: "#111827", 
                marginBottom: "clamp(16px, 3vw, 24px)",
                textAlign: "center"
              }}>
                What We Deliver
              </h3>
              <div className="deliver-grid" style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", 
                gap: "clamp(12px, 2vw, 20px) clamp(16px, 3vw, 32px)" 
              }}>
                {[
                  "Scalable & robust solutions",
                  "Modern technology stack",
                  "Complete documentation",
                  "Performance optimization",
                  "Ongoing support & maintenance",
                  "Training & knowledge transfer"
                ].map((deliverable, index) => (
                  <div key={index} style={{ 
                    display: "flex", 
                    alignItems: "flex-start", 
                    gap: "12px" 
                  }}>
                    <FaCheck style={{ 
                      color: "var(--color-primary)", 
                      fontSize: "18px", 
                      flexShrink: 0,
                      marginTop: "2px"
                    }} />
                    <span style={{ 
                      fontSize: "16px", 
                      color: "#374151",
                      lineHeight: "1.6"
                    }}>
                      {deliverable}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wireframe Process Flow */}
          <div style={{ position: "relative", padding: "60px 0" }}>
            {/* Connecting Line */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                right: "0",
                height: "2px",
                background: "linear-gradient(90deg, var(--color-primary), var(--color-primary-dark), var(--color-primary))",
                zIndex: 0,
                marginTop: "-1px",
              }}
            />

            <div className="process-flow-grid" style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", 
              gap: "clamp(20px, 3vw, 32px)",
              position: "relative",
              zIndex: 1
            }}>
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description: "Understanding your requirements, goals, and vision to create a comprehensive project roadmap.",
                },
                {
                  step: "02",
                  title: "Design & Development",
                  description: "Creating wireframes, prototypes, and building robust solutions with modern technologies.",
                },
                {
                  step: "03",
                  title: "Testing & Quality",
                  description: "Rigorous testing, quality assurance, and optimization to ensure flawless performance.",
                },
                {
                  step: "04",
                  title: "Deployment & Support",
                  description: "Seamless deployment, ongoing maintenance, and continuous support for your success.",
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                  }}
                >
                  {/* Wireframe Box */}
                  <div
                    style={{
                      background: "#ffffff",
                      border: "3px dashed #D1D5DB",
                      borderRadius: "12px",
                      padding: "32px 24px",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-primary)";
                      e.currentTarget.style.borderStyle = "solid";
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow = "0 12px 32px rgba(255, 108, 12, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#D1D5DB";
                      e.currentTarget.style.borderStyle = "dashed";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Step Number */}
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        background: "var(--color-primary)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 24px",
                        color: "#ffffff",
                        fontSize: "20px",
                        fontWeight: 700,
                        border: "4px solid #ffffff",
                        boxShadow: "0 4px 12px rgba(255, 108, 12, 0.3)",
                      }}
                    >
                      {phase.step}
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#111827",
                        marginBottom: "12px",
                        lineHeight: "1.3",
                      }}
                    >
                      {phase.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "#6B7280",
                        lineHeight: "1.6",
                        margin: "0",
                      }}
                    >
                      {phase.description}
                    </p>
                  </div>

                  {/* Arrow Connector (except last) */}
                  {index < 3 && (
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "-16px",
                        transform: "translateY(-50%)",
                        width: "0",
                        height: "0",
                        borderLeft: "12px solid var(--color-primary)",
                        borderTop: "8px solid transparent",
                        borderBottom: "8px solid transparent",
                        zIndex: 2,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Approach Details */}
          <div className="approach-details-grid" style={{ marginTop: "clamp(48px, 8vw, 80px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "clamp(20px, 3vw, 32px)" }}>
            {[
              {
                title: "Collaborative",
                description: "We work closely with you at every stage, ensuring transparency and alignment with your vision.",
              },
              {
                title: "Agile Methodology",
                description: "Flexible, iterative approach that adapts to changing requirements and delivers value incrementally.",
              },
              {
                title: "Result-Driven",
                description: "Focus on measurable outcomes and continuous improvement to achieve your business objectives.",
              },
            ].map((principle, index) => (
              <div
                key={index}
                style={{
                  background: "#F9FAFB",
                  border: "2px solid #E5E7EB",
                  borderRadius: "12px",
                  padding: "32px",
                  textAlign: "left",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#FF6B35";
                  e.currentTarget.style.background = "#FFF5F2";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E5E7EB";
                  e.currentTarget.style.background = "#F9FAFB";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: "12px",
                    lineHeight: "1.3",
                  }}
                >
                  {principle.title}
                </h4>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "#6B7280",
                    lineHeight: "1.6",
                    margin: "0",
                  }}
                >
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Training;

