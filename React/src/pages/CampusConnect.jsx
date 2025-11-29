import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaGraduationCap, FaRocket, FaChalkboardTeacher, FaCloud, FaChartLine, FaHeadset, FaTrophy, FaHandshake, FaArrowUp, FaArrowRight, FaUsers, FaUniversity, FaBullseye, FaBriefcase, FaBook, FaCode, FaBrain, FaRobot, FaCertificate, FaLaptop, FaGlobe, FaStar, FaJava, FaFlask, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";
import { SiPython, SiOpenai, SiTensorflow, SiPytorch, SiJavascript, SiReact, SiNodedotjs, SiDocker, SiKubernetes, SiAmazon, SiGooglecloud, SiPostgresql, SiMongodb, SiFastapi, SiFlask, SiDjango, SiMysql } from "react-icons/si";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { curriculumData } from "../data/curriculumData";
import campusConnectHero from "../assets/campus-connect-hero.png";
// Video from public folder for better compatibility
const campusVideo = "/AceAI_Student_to_Professional_Journey.mp4";
import {
  // AI/LLM Models
  OpenAI, Claude, Gemini, Anthropic, Mistral, MetaAI, Meta, HuggingFace,
  LangChain, LangGraph, LangSmith, Cohere, Perplexity, Groq, DeepSeek,
  // AI Platforms & Tools
  Cursor, Windsurf, CrewAI, N8n, Replicate, Runway, Stability, Midjourney,
  Dalle, Sora, Flux, ElevenLabs, Figma, Github, GithubCopilot, Copilot,
  // Cloud & Infrastructure
  GoogleCloud, Aws, Azure, AzureAI, VertexAI, Bedrock,
  // Development Tools
  Vercel, Railway, Replit,
  // Additional AI Services
  Together, Anyscale, Fireworks, Baseten, DeepInfra, Grok, XAI, ZAI,
  // Chinese AI Models
  Qwen, Baichuan, ChatGLM, Yi, InternLM, Moonshot,
  // Other AI Tools
  Ollama, LmStudio, OpenRouter, OpenWebUI, ComfyUI, Gradio,
  // LLM Frameworks
  LlamaIndex, PydanticAI, Phidata,
} from "@lobehub/icons";

function CampusConnect() {
  const [openFaq, setOpenFaq] = useState(null);
  const [ref, isVisible] = useScrollAnimation();
  
  useEffect(() => {
    document.title = "Campus Connect - Ace AI";
    document.body.style.background = "#ffffff";
    return () => {
      document.body.style.background = "";
      document.title = "Ace AI - EdTech & Software Solutions";
    };
  }, []);

  const stats = [
    { icon: <FaUsers />, number: "200+", label: "Institutions" },
    { icon: <FaGraduationCap />, number: "15000+", label: "Students Trained" },
    { icon: <FaChalkboardTeacher />, number: "500+", label: "Faculty Partners" },
    { icon: <FaBullseye />, number: "95%+", label: "Placement Rate" },
  ];

  const faqs = [
    {
      q: "What's included in the institutional partnership?",
      a: "Complete curriculum, LMS, faculty training, student support, placement assistance, analytics, and dedicated account management.",
    },
    {
      q: "How long does onboarding take?",
      a: "Typically 2-4 weeks. We customize everything to your institution's needs and existing systems.",
    },
    {
      q: "Can we customize the curriculum?",
      a: "Absolutely. We work with your institution to align programs with specific student needs and regional preferences.",
    },
    {
      q: "What about student placement?",
      a: "We provide comprehensive placement assistance including resume review, interview prep, and direct company connections.",
    },
    {
      q: "How is billing structured?",
      a: "Annual subscription with flexible payment terms. We offer monthly, quarterly, or annual payment options.",
    },
    {
      q: "Do you provide faculty training?",
      a: "Yes. Full faculty certification programs to ensure they're equipped to teach the latest technologies.",
    },
  ];

  // Design System Constants (UX/UI Expert) - Refined Typography
  const typography = {
    hero: { 
      fontSize: "clamp(42px, 5.5vw, 68px)", 
      fontWeight: 800, 
      lineHeight: 1.15, 
      letterSpacing: "-0.03em",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Roboto', sans-serif"
    },
    h1: { 
      fontSize: "clamp(38px, 4.8vw, 58px)", 
      fontWeight: 800, 
      lineHeight: 1.2, 
      letterSpacing: "-0.02em",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Roboto', sans-serif"
    },
    h2: { 
      fontSize: "clamp(32px, 4.2vw, 50px)", 
      fontWeight: 700, 
      lineHeight: 1.25, 
      letterSpacing: "-0.015em",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Roboto', sans-serif"
    },
    h3: { 
      fontSize: "clamp(26px, 3.2vw, 36px)", 
      fontWeight: 700, 
      lineHeight: 1.35, 
      letterSpacing: "-0.01em",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Roboto', sans-serif"
    },
    h4: { 
      fontSize: "clamp(20px, 2.6vw, 26px)", 
      fontWeight: 600, 
      lineHeight: 1.45,
      letterSpacing: "-0.005em",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Roboto', sans-serif"
    },
    body: { 
      fontSize: "clamp(16px, 1.9vw, 18px)", 
      fontWeight: 400, 
      lineHeight: 1.75,
      letterSpacing: "0.01em",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Roboto', sans-serif"
    },
    bodyLarge: { 
      fontSize: "clamp(18px, 2.1vw, 22px)", 
      fontWeight: 400, 
      lineHeight: 1.7,
      letterSpacing: "0.01em",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Roboto', sans-serif"
    },
    small: { 
      fontSize: "clamp(14px, 1.6vw, 16px)", 
      fontWeight: 400, 
      lineHeight: 1.65,
      letterSpacing: "0.01em",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Roboto', sans-serif"
    },
    label: { 
      fontSize: "clamp(12px, 1.4vw, 14px)", 
      fontWeight: 600, 
      letterSpacing: "0.08em", 
      textTransform: "uppercase",
      lineHeight: 1.5,
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Roboto', sans-serif"
    },
  };

  const spacing = {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "48px",
    xxl: "64px",
    xxxl: "80px",
    section: "120px",
  };

  const colors = {
    primary: "var(--color-primary)", // #FF6C0C - Orange
    primaryLight: "var(--color-primary-light)", // #FFE08F - Yellow
    primaryDark: "var(--color-primary-dark)", // #BF1A1A - Red/Dark Orange
    primaryBg: "rgba(255, 108, 12, 0.08)",
    textPrimary: "#111827",
    textSecondary: "#374151",
    textTertiary: "#6B7280",
    textLight: "#9CA3AF",
    border: "#E5E7EB",
    borderLight: "#F3F4F6",
    background: "#FFFFFF",
    backgroundLight: "#F9FAFB",
    success: "#10B981",
    gradient: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
  };

  const shadows = {
    sm: "0 2px 8px rgba(0, 0, 0, 0.04)",
    md: "0 4px 16px rgba(255, 108, 12, 0.12)",
    lg: "0 8px 24px rgba(255, 108, 12, 0.15)",
    xl: "0 16px 40px rgba(255, 108, 12, 0.2)",
  };

  const borderRadius = {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    full: "999px",
  };

  return (
    <div style={{ 
      background: colors.background, 
      minHeight: "100vh",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
      fontSize: "16px",
      lineHeight: 1.6,
      color: colors.textPrimary,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    }}>
      <Navbar />
      <section 
        ref={ref} 
        id="campus-connect" 
        style={{ 
          paddingTop: "90px", 
          paddingBottom: spacing.xxxl,
          background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)",
        }}
      >
        <div className="container" style={{ 
          maxWidth: "1440px", 
          margin: "0 auto", 
          padding: `0 clamp(${spacing.md}, 5vw, ${spacing.xxl})` 
        }}>
          
          {/* Hero Header - Improved Typography & Spacing */}
          <div style={{ 
            textAlign: "center", 
            marginBottom: spacing.section,
            paddingTop: spacing.xxl,
          }}>
            <span 
              className={isVisible ? "fade-in-up" : ""}
              style={{
                display: "inline-block",
                padding: `${spacing.xs} ${spacing.md}`,
                background: colors.gradient,
                color: "#FFFFFF",
                borderRadius: borderRadius.full,
                fontSize: typography.label.fontSize,
                fontWeight: typography.label.fontWeight,
                letterSpacing: typography.label.letterSpacing,
                textTransform: typography.label.textTransform,
                boxShadow: "0 4px 16px rgba(255, 108, 12, 0.3)",
                marginBottom: spacing.lg,
              }}
            >
              🎓 Institutional Partnerships
            </span>
            
            <h1
              className={isVisible ? "fade-in-up" : ""}
              style={{
                ...typography.hero,
                color: colors.textPrimary,
                marginBottom: spacing.lg,
                maxWidth: "1100px",
                margin: `0 auto ${spacing.lg}`,
                textAlign: "center",
              }}
            >
              Transform Your Institution with{" "}
              <span style={{ 
                background: colors.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}>
                Aceai Campus Connect
              </span>
            </h1>
            
            <p
              className={isVisible ? "fade-in-up" : ""}
              style={{
                ...typography.bodyLarge,
                color: colors.textSecondary,
                maxWidth: "850px",
                margin: `0 auto ${spacing.xl}`,
                textAlign: "center",
                fontWeight: 400,
              }}
            >
              Empower your students and faculty with cutting-edge AI, technical training, and industry expertise. Partner with Aceai to prepare your campus for the future.
            </p>
            
            {/* Hero Image */}
            <div
              className={isVisible ? "fade-in-up" : ""}
              style={{
                margin: `${spacing.xxl} auto ${spacing.xl}`,
                maxWidth: "1200px",
                borderRadius: borderRadius.xl,
                overflow: "hidden",
                boxShadow: shadows.xl,
                border: `2px solid ${colors.border}`,
              }}
            >
              <img
                src={campusConnectHero}
                alt="Campus Connect - Transform Your Institution"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
            
            {/* Stats Section - Enhanced Design */}
            <div
              className={isVisible ? "fade-in-up" : ""}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: spacing.lg,
                marginTop: spacing.xl,
                maxWidth: "1000px",
                margin: `${spacing.xl} auto 0`,
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    animationDelay: `${i * 100}ms`,
                    textAlign: "center",
                    padding: `${spacing.lg} ${spacing.md}`,
                    background: colors.background,
                    borderRadius: borderRadius.lg,
                    border: `1px solid ${colors.border}`,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    minWidth: "180px",
                    boxShadow: shadows.sm,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = shadows.lg;
                    e.currentTarget.style.borderColor = colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = shadows.sm;
                    e.currentTarget.style.borderColor = colors.border;
                  }}
                >
                  <div style={{ 
                    fontSize: "clamp(28px, 3vw, 40px)", 
                    fontWeight: 800, 
                    color: colors.primary,
                    marginBottom: spacing.xs,
                    lineHeight: 1,
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ 
                    ...typography.small, 
                    fontWeight: 600, 
                    color: colors.textSecondary,
                    letterSpacing: "0.02em"
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Partner Section - Improved Layout */}
          <div
            className="why-partner-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
              gap: "clamp(40px, 8vw, 120px)",
              marginBottom: spacing.section,
              alignItems: "start",
            }}
          >
            <div>
              <h2
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  ...typography.h2,
                  color: colors.textPrimary,
                  marginBottom: spacing.lg,
                  textAlign: "left",
                  fontWeight: 700,
                }}
              >
                Why Partner with Aceai?
              </h2>
              <p
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  ...typography.body,
                  color: colors.textSecondary,
                  marginBottom: spacing.xl,
                  maxWidth: "650px",
                  textAlign: "left",
                  fontWeight: 400,
                }}
              >
                Our comprehensive partnership program is designed to transform your institution's technical education capabilities. We provide end-to-end solutions that enhance student outcomes, boost placement rates, and elevate your institution's reputation.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: spacing.md }}>
                {[
                  { 
                    icon: <FaCheck />, 
                    title: "Industry-Aligned Curriculum", 
                    desc: "Our programs match real-world industry demands. Teach skills employers actually want, ensuring your graduates are job-ready from day one." 
                  },
                  { 
                    icon: <FaChalkboardTeacher />, 
                    title: "Expert Faculty Support", 
                    desc: "Access to our network of 200+ expert instructors and industry professionals who bring real-world experience to your campus." 
                  },
                  { 
                    icon: <FaRocket />, 
                    title: "Student Placement Pipeline", 
                    desc: "Direct placement opportunities for your graduates with a proven track record of 95%+ placement rate and ₹8-15 LPA average salary." 
                  },
                  { 
                    icon: <FaArrowUp />, 
                    title: "Cost-Effective Solution", 
                    desc: "Affordable programs that don't compromise on quality. Flexible pricing models tailored to your institution's budget and scale." 
                  },
                  { 
                    icon: <FaCloud />, 
                    title: "Zero Infrastructure Investment", 
                    desc: "No additional infrastructure needed. 100% cloud-based delivery with offline options. Start immediately without capital expenditure." 
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={isVisible ? "fade-in-up" : ""}
                    style={{
                      animationDelay: `${i * 80}ms`,
                      display: "flex",
                      gap: spacing.md,
                      alignItems: "flex-start",
                      padding: spacing.lg,
                      background: colors.backgroundLight,
                      borderRadius: borderRadius.md,
                      border: `1px solid ${colors.border}`,
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = colors.primaryBg;
                      e.currentTarget.style.borderColor = colors.primary;
                      e.currentTarget.style.transform = "translateX(4px)";
                      e.currentTarget.style.boxShadow = shadows.md;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = colors.backgroundLight;
                      e.currentTarget.style.borderColor = colors.border;
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ 
                      color: colors.primary, 
                      fontSize: "24px", 
                      marginTop: "4px",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                    }}>
                      {item.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ 
                        ...typography.h4,
                        color: colors.textPrimary,
                        marginBottom: spacing.sm,
                        textAlign: "left",
                        fontWeight: 600,
                      }}>
                        {item.title}
                      </h4>
                      <p style={{ 
                        ...typography.body,
                        color: colors.textSecondary,
                        margin: 0,
                        textAlign: "left",
                        fontWeight: 400,
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Video on Right Side */}
              <div
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  position: "relative",
                  width: "100%",
                  borderRadius: borderRadius.xl,
                  overflow: "hidden",
                  boxShadow: shadows.lg,
                  border: `2px solid ${colors.border}`,
                  marginBottom: spacing.lg,
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  controls={false}
                  onLoadedData={(e) => {
                    console.log("Video loaded successfully", campusVideo);
                    e.target.play().catch(err => console.log("Video play error:", err));
                  }}
                  onError={(e) => {
                    console.error("Video error:", e, "Video path:", campusVideo);
                  }}
                  onCanPlay={(e) => {
                    e.target.play().catch(err => console.log("Play error:", err));
                  }}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                  }}
                >
                  <source src={campusVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div
                className={`feature-cards-grid ${isVisible ? "fade-in-up" : ""}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
                  gap: spacing.md,
                }}
              >
                {[
                  { icon: <FaHeadset />, title: "24/7 Student Support" },
                  { icon: <FaChartLine />, title: "Real-Time Analytics" },
                  { icon: <FaCheck />, title: "Customizable Curriculum" },
                  { icon: <FaGraduationCap />, title: "Monthly Webinars" },
                  { icon: <FaTrophy />, title: "Industry Certification" },
                  { icon: <FaRocket />, title: "Job Placement Assistance" },
                  { icon: <FaHandshake />, title: "Career Counseling" },
                  { icon: <FaArrowUp />, title: "Professional Development" },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      animationDelay: `${i * 50}ms`,
                      background: colors.background,
                      border: `2px solid ${colors.border}`,
                      borderRadius: borderRadius.lg,
                      padding: `${spacing.lg} ${spacing.md}`,
                      textAlign: "center",
                      minHeight: "160px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                      boxShadow: shadows.sm,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px) scale(1.01)";
                      e.currentTarget.style.boxShadow = shadows.lg;
                      e.currentTarget.style.borderColor = colors.primary;
                      e.currentTarget.style.background = colors.primaryBg;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = shadows.sm;
                      e.currentTarget.style.borderColor = colors.border;
                      e.currentTarget.style.background = colors.background;
                    }}
                  >
                  <div style={{ 
                    fontSize: "clamp(32px, 3.5vw, 42px)", 
                    color: colors.primary, 
                    marginBottom: spacing.md,
                    transition: "transform 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ 
                    ...typography.small, 
                    fontWeight: 600,
                    color: colors.textSecondary,
                    textAlign: "center",
                    lineHeight: 1.5,
                  }}>
                    {item.title}
                  </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comprehensive Services for Schools, Colleges, Universities - Enhanced */}
          <div style={{ marginBottom: spacing.section }}>
            <div style={{ textAlign: "center", marginBottom: spacing.xxl }}>
              <h2
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  ...typography.h2,
                  color: colors.textPrimary,
                  marginBottom: spacing.md,
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                Everything We{" "}
                <span style={{ 
                  background: colors.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Provide to Institutions
                </span>
              </h2>
              <p 
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  ...typography.body,
                  color: colors.textSecondary,
                  maxWidth: "750px",
                  margin: "0 auto",
                  textAlign: "center",
                  fontWeight: 400,
                }}
              >
                Complete end-to-end solutions tailored for schools, colleges, and universities to transform technical education
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: spacing.xl }}>
              {[
                {
                  title: "For Schools",
                  icon: <FaUniversity />,
                  description: "Prepare students for the future with early exposure to AI and programming. Age-appropriate curriculum designed for school students.",
                  services: [
                    "Age-appropriate AI & programming curriculum",
                    "Python fundamentals for beginners",
                    "Interactive coding workshops",
                    "Student-friendly LMS interface",
                    "Parent progress reports",
                    "Competition preparation",
                    "Project-based learning",
                    "Career guidance sessions"
                  ],
                  benefits: [
                    "Early technical skill development",
                    "Improved problem-solving abilities",
                    "Enhanced logical thinking",
                    "Foundation for future tech careers"
                  ]
                },
                {
                  title: "For Colleges",
                  icon: <FaGraduationCap />,
                  description: "Bridge the gap between academic learning and industry requirements. Comprehensive technical training programs for college students.",
                  services: [
                    "Industry-aligned technical courses",
                    "Python, AI, ML, and full-stack development",
                    "Real-world project experience",
                    "Internship placement assistance",
                    "Industry expert guest lectures",
                    "Hackathon participation",
                    "Technical workshops & seminars",
                    "Job placement support",
                    "Resume & interview preparation",
                    "Mock interview sessions"
                  ],
                  benefits: [
                    "Industry-ready graduates",
                    "Higher placement rates (95%+)",
                    "Competitive salary packages (₹8-15 LPA)",
                    "Strong industry connections"
                  ]
                },
                {
                  title: "For Universities",
                  icon: <FaTrophy />,
                  description: "Advanced programs for universities focusing on research, innovation, and cutting-edge technology. Partnership programs for faculty and students.",
                  services: [
                    "Advanced AI & ML research programs",
                    "Faculty upskilling & certification",
                    "Research collaboration opportunities",
                    "Publication support",
                    "Industry partnership programs",
                    "Custom curriculum development",
                    "White-label LMS solutions",
                    "Alumni network access",
                    "On-campus workshops & bootcamps",
                    "Industry mentorship programs",
                    "Startup incubation support",
                    "Technology transfer programs"
                  ],
                  benefits: [
                    "Enhanced institutional reputation",
                    "Industry-academia collaboration",
                    "Research publications",
                    "Innovation ecosystem development"
                  ]
                },
              ].map((institution, i) => (
                <div
                  key={i}
                  className={isVisible ? "fade-in-up" : ""}
                  style={{
                    animationDelay: `${i * 100}ms`,
                    background: colors.background,
                    border: `2px solid ${colors.border}`,
                    borderRadius: borderRadius.xl,
                    padding: `${spacing.xxl} ${spacing.xl}`,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: shadows.sm,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.primary;
                    e.currentTarget.style.boxShadow = shadows.lg;
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.border;
                    e.currentTarget.style.boxShadow = shadows.sm;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: spacing.lg, marginBottom: spacing.xl }}>
                    <div style={{ 
                      fontSize: "56px", 
                      color: colors.primary,
                      background: colors.primaryBg,
                      width: "88px",
                      height: "88px",
                      borderRadius: borderRadius.lg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}>
                      {institution.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        ...typography.h2,
                        color: colors.textPrimary,
                        marginBottom: spacing.sm,
                      }}>
                        {institution.title}
                      </h3>
                      <p style={{
                        ...typography.bodyLarge,
                        color: colors.textSecondary,
                        margin: 0,
                      }}>
                        {institution.description}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: spacing.xl }}>
                    <div>
                      <h4 style={{
                        ...typography.h4,
                        color: colors.textPrimary,
                        marginBottom: spacing.md,
                        fontSize: "20px",
                      }}>
                        Services We Provide
                      </h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: spacing.sm }}>
                        {institution.services.map((service, j) => (
                          <div
                            key={j}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: spacing.sm,
                              fontSize: typography.body.fontSize,
                              color: colors.textSecondary,
                            }}
                          >
                            <FaCheck
                              style={{
                                color: colors.primary,
                                fontSize: "16px",
                                flexShrink: 0,
                                marginTop: "4px",
                              }}
                            />
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 style={{
                        ...typography.h4,
                        color: colors.textPrimary,
                        marginBottom: spacing.md,
                        fontSize: "20px",
                      }}>
                        Key Benefits
                      </h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: spacing.sm }}>
                        {institution.benefits.map((benefit, j) => (
                          <div
                            key={j}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: spacing.sm,
                              fontSize: typography.body.fontSize,
                              color: colors.textSecondary,
                            }}
                          >
                            <FaStar
                              style={{
                                color: colors.primary,
                                fontSize: "16px",
                                flexShrink: 0,
                                marginTop: "4px",
                              }}
                            />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What We Provide Section - Enhanced */}
          <div style={{ marginBottom: spacing.section }}>
            <div style={{ textAlign: "center", marginBottom: spacing.xxl }}>
              <h2
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  ...typography.h2,
                  color: colors.textPrimary,
                  marginBottom: spacing.md,
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                Comprehensive Solutions for{" "}
                <span style={{ 
                  background: colors.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Educational Excellence
                </span>
              </h2>
              <p 
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  ...typography.body,
                  color: colors.textSecondary,
                  maxWidth: "800px",
                  margin: "0 auto",
                  textAlign: "center",
                  fontWeight: 400,
                }}
              >
                Everything you need to transform your institution's technical education and boost student success rates.
              </p>
            </div>
            <div
              className="services-offerings-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                gap: spacing.lg,
                maxWidth: "1400px",
                margin: "0 auto",
              }}
            >
              {[
                {
                  icon: <FaGraduationCap />,
                  title: "Complete Curriculum Solutions",
                  desc: "Ready-to-deploy, industry-aligned training programs. From Python & Java to AI & Generative AI - all designed by industry experts.",
                  highlights: ["4 core training programs", "Monthly curriculum updates", "Industry expert instructors", "Certification included", "Flexible delivery modes"],
                },
                {
                  icon: <FaRocket />,
                  title: "Career Development & Placement",
                  desc: "Comprehensive student support from training to job placement. Our dedicated team ensures every student is job-ready.",
                  highlights: ["Resume & interview coaching", "Mock interviews", "Job fair & recruitment", "95%+ placement rate", "₹8-15 LPA average salary"],
                },
                {
                  icon: <FaChalkboardTeacher />,
                  title: "Faculty Upskilling & Certification",
                  desc: "Keep your faculty updated with latest industry trends. Specialized training programs designed for educators.",
                  highlights: ["Faculty certification programs", "Industry mentorship", "Teaching workshops", "Latest tools access", "Quarterly updates"],
                },
                {
                  icon: <FaCloud />,
                  title: "Complete Learning Infrastructure",
                  desc: "No need for additional infrastructure. We provide cloud-based learning management system and all necessary tools.",
                  highlights: ["Cloud-based LMS", "Live class streaming", "Assignment tracking", "Performance analytics", "99.9% uptime"],
                },
                {
                  icon: <FaChartLine />,
                  title: "Real-Time Analytics Dashboard",
                  desc: "Track student progress, course completion rates, and placement outcomes with our comprehensive analytics platform.",
                  highlights: ["Real-time progress tracking", "Individual & batch reports", "Skill assessment analytics", "Placement pipeline visibility", "Automated reports"],
                },
                {
                  icon: <FaHeadset />,
                  title: "24/7 Dedicated Support Team",
                  desc: "A dedicated team assigned to your institution for seamless coordination, troubleshooting, and continuous support.",
                  highlights: ["Dedicated manager", "24/7 technical support", "Monthly strategy meetings", "Custom solutions", "Priority issue resolution"],
                },
              ].map((offering, i) => (
                <div
                  key={i}
                  className={isVisible ? "fade-in-up" : ""}
                  style={{
                    animationDelay: `${i * 100}ms`,
                    background: colors.background,
                    border: `2px solid ${colors.border}`,
                    borderRadius: borderRadius.xl,
                    padding: `${spacing.xl} ${spacing.lg}`,
                    minHeight: "450px",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: shadows.sm,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = shadows.xl;
                    e.currentTarget.style.borderColor = colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = shadows.sm;
                    e.currentTarget.style.borderColor = colors.border;
                  }}
                >
                  <div style={{ 
                    fontSize: "48px", 
                    color: colors.primary, 
                    marginBottom: spacing.lg,
                    transition: "transform 0.3s ease"
                  }}>
                    {offering.icon}
                  </div>
                  <h3 style={{ 
                    ...typography.h3,
                    color: colors.textPrimary,
                    marginBottom: spacing.md,
                    textAlign: "left",
                    fontWeight: 700,
                  }}>
                    {offering.title}
                  </h3>
                  <p style={{ 
                    ...typography.body,
                    color: colors.textSecondary,
                    marginBottom: spacing.lg,
                    flexGrow: 1,
                    textAlign: "left",
                    fontWeight: 400,
                  }}>
                    {offering.desc}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: spacing.xs }}>
                    {offering.highlights.map((highlight, j) => (
                      <div
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: spacing.xs,
                          fontSize: typography.small.fontSize,
                          color: colors.textSecondary,
                        }}
                      >
                        <FaCheck
                          style={{
                            color: colors.primary,
                            fontSize: "14px",
                            flexShrink: 0,
                            marginTop: "4px",
                          }}
                        />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies We Teach & Use Section - Full Logo Implementation */}
          <div style={{ marginBottom: spacing.section, padding: `${spacing.xxl} 0`, background: "linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)" }}>
            <div style={{ textAlign: "center", marginBottom: spacing.xxl }}>
              <h2
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  ...typography.h2,
                  color: colors.textPrimary,
                  marginBottom: spacing.md,
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                Technologies We{" "}
                <span style={{ 
                  background: colors.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Teach & Use
                </span>
              </h2>
              <p 
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  ...typography.body,
                  color: colors.textSecondary,
                  maxWidth: "750px",
                  margin: "0 auto",
                  textAlign: "center",
                  fontWeight: 400,
                }}
              >
                Industry-standard technologies and frameworks that power modern AI and software development
              </p>
            </div>

            <div style={{ 
              position: "relative",
              overflow: "hidden",
              padding: `${spacing.lg} 0`,
              background: colors.background,
              borderRadius: borderRadius.xl,
              border: `2px solid ${colors.border}`,
            }}>
              <div
                style={{
                  display: "flex",
                  gap: spacing.xl,
                  animation: "scrollLogos 280s linear infinite",
                  willChange: "transform",
                  width: "fit-content",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.animationPlayState = "paused";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.animationPlayState = "running";
                }}
              >
                {/* First set of logos */}
                <div style={{
                  display: "flex",
                  gap: spacing.xl,
                  whiteSpace: "nowrap",
                  alignItems: "center",
                }}>
                  {[
                    // Programming Languages
                    { name: "Python", Icon: SiPython, useColor: false },
                    { name: "JavaScript", Icon: SiJavascript, useColor: false },
                    { name: "Java", Icon: FaJava, useColor: false },
                    // Frontend Frameworks
                    { name: "React", Icon: SiReact, useColor: false },
                    { name: "Node.js", Icon: SiNodedotjs, useColor: false },
                    // Databases
                    { name: "MongoDB", Icon: SiMongodb, useColor: false },
                    { name: "PostgreSQL", Icon: SiPostgresql, useColor: false },
                    { name: "MySQL", Icon: SiMysql, useColor: false },
                    // Backend Frameworks
                    { name: "Flask", Icon: SiFlask, useColor: false },
                    { name: "FastAPI", Icon: SiFastapi, useColor: false },
                    { name: "Django", Icon: SiDjango, useColor: false },
                    // AI/LLM Models from Lobe Icons (with original colors)
                    { name: "OpenAI", Icon: OpenAI, useColor: true },
                    { name: "Claude", Icon: Claude, useColor: true },
                    { name: "Gemini", Icon: Gemini, useColor: true },
                    { name: "Anthropic", Icon: Anthropic, useColor: true },
                    { name: "Mistral", Icon: Mistral, useColor: true },
                    { name: "Meta AI", Icon: MetaAI, useColor: true },
                    { name: "Llama", Icon: Meta, useColor: true },
                    { name: "Hugging Face", Icon: HuggingFace, useColor: true },
                    { name: "DeepSeek", Icon: DeepSeek, useColor: true },
                    { name: "Qwen", Icon: Qwen, useColor: true },
                    { name: "Baichuan", Icon: Baichuan, useColor: true },
                    { name: "ChatGLM", Icon: ChatGLM, useColor: true },
                    { name: "Yi", Icon: Yi, useColor: true },
                    { name: "InternLM", Icon: InternLM, useColor: true },
                    { name: "Moonshot", Icon: Moonshot, useColor: true },
                    // AI Frameworks & Tools
                    { name: "LangChain", Icon: LangChain, useColor: true },
                    { name: "LangGraph", Icon: LangGraph, useColor: true },
                    { name: "LangSmith", Icon: LangSmith, useColor: true },
                    { name: "LlamaIndex", Icon: LlamaIndex, useColor: true },
                    { name: "PydanticAI", Icon: PydanticAI, useColor: true },
                    { name: "Phidata", Icon: Phidata, useColor: true },
                    // AI Platforms & Tools
                    { name: "Cursor", Icon: Cursor, useColor: true },
                    { name: "Windsurf", Icon: Windsurf, useColor: true },
                    { name: "CrewAI", Icon: CrewAI, useColor: true },
                    { name: "n8n", Icon: N8n, useColor: true },
                    { name: "Replicate", Icon: Replicate, useColor: true },
                    { name: "Runway", Icon: Runway, useColor: true },
                    { name: "Stability AI", Icon: Stability, useColor: true },
                    { name: "Midjourney", Icon: Midjourney, useColor: true },
                    { name: "DALL-E", Icon: Dalle, useColor: true },
                    { name: "Sora", Icon: Sora, useColor: true },
                    { name: "Flux", Icon: Flux, useColor: true },
                    { name: "ElevenLabs", Icon: ElevenLabs, useColor: true },
                    // AI Services
                    { name: "Cohere", Icon: Cohere, useColor: true },
                    { name: "Perplexity", Icon: Perplexity, useColor: true },
                    { name: "Groq", Icon: Groq, useColor: true },
                    { name: "Grok", Icon: Grok, useColor: true },
                    { name: "XAI", Icon: XAI, useColor: true },
                    { name: "Together AI", Icon: Together, useColor: true },
                    { name: "Anyscale", Icon: Anyscale, useColor: true },
                    { name: "Fireworks", Icon: Fireworks, useColor: true },
                    { name: "Baseten", Icon: Baseten, useColor: true },
                    { name: "DeepInfra", Icon: DeepInfra, useColor: true },
                    // Cloud & Infrastructure
                    { name: "AWS", Icon: Aws, useColor: true },
                    { name: "GCP", Icon: GoogleCloud, useColor: true },
                    { name: "Azure", Icon: Azure, useColor: true },
                    { name: "Azure AI", Icon: AzureAI, useColor: true },
                    { name: "Vertex AI", Icon: VertexAI, useColor: true },
                    { name: "Bedrock", Icon: Bedrock, useColor: true },
                    // AI Tools & Platforms
                    { name: "Ollama", Icon: Ollama, useColor: true },
                    { name: "LM Studio", Icon: LmStudio, useColor: true },
                    { name: "OpenRouter", Icon: OpenRouter, useColor: true },
                    { name: "OpenWebUI", Icon: OpenWebUI, useColor: true },
                    { name: "ComfyUI", Icon: ComfyUI, useColor: true },
                    { name: "Gradio", Icon: Gradio, useColor: true },
                    // ML Frameworks
                    { name: "TensorFlow", Icon: SiTensorflow, useColor: false },
                    { name: "PyTorch", Icon: SiPytorch, useColor: false },
                    // DevOps
                    { name: "Docker", Icon: SiDocker, useColor: false },
                    { name: "Kubernetes", Icon: SiKubernetes, useColor: false },
                    // Development Tools
                    { name: "GitHub", Icon: Github, useColor: true },
                    { name: "GitHub Copilot", Icon: GithubCopilot, useColor: true },
                    { name: "Copilot", Icon: Copilot, useColor: true },
                    { name: "Figma", Icon: Figma, useColor: true },
                    { name: "Vercel", Icon: Vercel, useColor: true },
                    { name: "Railway", Icon: Railway, useColor: true },
                    { name: "Replit", Icon: Replit, useColor: true },
                  ].map((tech, i) => {
                    const IconComponent = tech.Icon;
                    return (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: spacing.xs,
                          padding: spacing.md,
                          background: colors.backgroundLight,
                          borderRadius: borderRadius.md,
                          border: `1px solid ${colors.border}`,
                          minWidth: "120px",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05) translateY(-4px)";
                          e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 108, 12, 0.3)";
                          e.currentTarget.style.borderColor = colors.primary;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1) translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                          e.currentTarget.style.borderColor = colors.border;
                        }}
                      >
                        <div style={{ 
                          width: "48px", 
                          height: "48px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                          {tech.useColor ? (
                            <IconComponent size={48} />
                          ) : (
                            <IconComponent size={48} style={{ color: colors.primary }} />
                          )}
                        </div>
                        <span style={{
                          fontSize: typography.small.fontSize,
                          fontWeight: 600,
                          color: colors.textSecondary,
                          textAlign: "center",
                        }}>
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {/* Duplicate set for seamless loop */}
                <div style={{
                  display: "flex",
                  gap: spacing.xl,
                  whiteSpace: "nowrap",
                  alignItems: "center",
                }}>
                  {[
                    // Programming Languages
                    { name: "Python", Icon: SiPython, useColor: false },
                    { name: "JavaScript", Icon: SiJavascript, useColor: false },
                    { name: "Java", Icon: FaJava, useColor: false },
                    // Frontend Frameworks
                    { name: "React", Icon: SiReact, useColor: false },
                    { name: "Node.js", Icon: SiNodedotjs, useColor: false },
                    // Databases
                    { name: "MongoDB", Icon: SiMongodb, useColor: false },
                    { name: "PostgreSQL", Icon: SiPostgresql, useColor: false },
                    { name: "MySQL", Icon: SiMysql, useColor: false },
                    // Backend Frameworks
                    { name: "Flask", Icon: SiFlask, useColor: false },
                    { name: "FastAPI", Icon: SiFastapi, useColor: false },
                    { name: "Django", Icon: SiDjango, useColor: false },
                    // AI/LLM Models from Lobe Icons (with original colors)
                    { name: "OpenAI", Icon: OpenAI, useColor: true },
                    { name: "Claude", Icon: Claude, useColor: true },
                    { name: "Gemini", Icon: Gemini, useColor: true },
                    { name: "Anthropic", Icon: Anthropic, useColor: true },
                    { name: "Mistral", Icon: Mistral, useColor: true },
                    { name: "Meta AI", Icon: MetaAI, useColor: true },
                    { name: "Llama", Icon: Meta, useColor: true },
                    { name: "Hugging Face", Icon: HuggingFace, useColor: true },
                    { name: "DeepSeek", Icon: DeepSeek, useColor: true },
                    { name: "Qwen", Icon: Qwen, useColor: true },
                    { name: "Baichuan", Icon: Baichuan, useColor: true },
                    { name: "ChatGLM", Icon: ChatGLM, useColor: true },
                    { name: "Yi", Icon: Yi, useColor: true },
                    { name: "InternLM", Icon: InternLM, useColor: true },
                    { name: "Moonshot", Icon: Moonshot, useColor: true },
                    // AI Frameworks & Tools
                    { name: "LangChain", Icon: LangChain, useColor: true },
                    { name: "LangGraph", Icon: LangGraph, useColor: true },
                    { name: "LangSmith", Icon: LangSmith, useColor: true },
                    { name: "LlamaIndex", Icon: LlamaIndex, useColor: true },
                    { name: "PydanticAI", Icon: PydanticAI, useColor: true },
                    { name: "Phidata", Icon: Phidata, useColor: true },
                    // AI Platforms & Tools
                    { name: "Cursor", Icon: Cursor, useColor: true },
                    { name: "Windsurf", Icon: Windsurf, useColor: true },
                    { name: "CrewAI", Icon: CrewAI, useColor: true },
                    { name: "n8n", Icon: N8n, useColor: true },
                    { name: "Replicate", Icon: Replicate, useColor: true },
                    { name: "Runway", Icon: Runway, useColor: true },
                    { name: "Stability AI", Icon: Stability, useColor: true },
                    { name: "Midjourney", Icon: Midjourney, useColor: true },
                    { name: "DALL-E", Icon: Dalle, useColor: true },
                    { name: "Sora", Icon: Sora, useColor: true },
                    { name: "Flux", Icon: Flux, useColor: true },
                    { name: "ElevenLabs", Icon: ElevenLabs, useColor: true },
                    // AI Services
                    { name: "Cohere", Icon: Cohere, useColor: true },
                    { name: "Perplexity", Icon: Perplexity, useColor: true },
                    { name: "Groq", Icon: Groq, useColor: true },
                    { name: "Grok", Icon: Grok, useColor: true },
                    { name: "XAI", Icon: XAI, useColor: true },
                    { name: "Together AI", Icon: Together, useColor: true },
                    { name: "Anyscale", Icon: Anyscale, useColor: true },
                    { name: "Fireworks", Icon: Fireworks, useColor: true },
                    { name: "Baseten", Icon: Baseten, useColor: true },
                    { name: "DeepInfra", Icon: DeepInfra, useColor: true },
                    // Cloud & Infrastructure
                    { name: "AWS", Icon: Aws, useColor: true },
                    { name: "GCP", Icon: GoogleCloud, useColor: true },
                    { name: "Azure", Icon: Azure, useColor: true },
                    { name: "Azure AI", Icon: AzureAI, useColor: true },
                    { name: "Vertex AI", Icon: VertexAI, useColor: true },
                    { name: "Bedrock", Icon: Bedrock, useColor: true },
                    // AI Tools & Platforms
                    { name: "Ollama", Icon: Ollama, useColor: true },
                    { name: "LM Studio", Icon: LmStudio, useColor: true },
                    { name: "OpenRouter", Icon: OpenRouter, useColor: true },
                    { name: "OpenWebUI", Icon: OpenWebUI, useColor: true },
                    { name: "ComfyUI", Icon: ComfyUI, useColor: true },
                    { name: "Gradio", Icon: Gradio, useColor: true },
                    // ML Frameworks
                    { name: "TensorFlow", Icon: SiTensorflow, useColor: false },
                    { name: "PyTorch", Icon: SiPytorch, useColor: false },
                    // DevOps
                    { name: "Docker", Icon: SiDocker, useColor: false },
                    { name: "Kubernetes", Icon: SiKubernetes, useColor: false },
                    // Development Tools
                    { name: "GitHub", Icon: Github, useColor: true },
                    { name: "GitHub Copilot", Icon: GithubCopilot, useColor: true },
                    { name: "Copilot", Icon: Copilot, useColor: true },
                    { name: "Figma", Icon: Figma, useColor: true },
                    { name: "Vercel", Icon: Vercel, useColor: true },
                    { name: "Railway", Icon: Railway, useColor: true },
                    { name: "Replit", Icon: Replit, useColor: true },
                  ].map((tech, i) => {
                    const IconComponent = tech.Icon;
                    return (
                      <div
                        key={`dup-${i}`}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: spacing.xs,
                          padding: spacing.md,
                          background: colors.backgroundLight,
                          borderRadius: borderRadius.md,
                          border: `1px solid ${colors.border}`,
                          minWidth: "120px",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05) translateY(-4px)";
                          e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 108, 12, 0.3)";
                          e.currentTarget.style.borderColor = colors.primary;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1) translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                          e.currentTarget.style.borderColor = colors.border;
                        }}
                      >
                        <div style={{ 
                          width: "48px", 
                          height: "48px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                          {tech.useColor ? (
                            <IconComponent size={48} />
                          ) : (
                            <IconComponent size={48} style={{ color: colors.primary }} />
                          )}
                        </div>
                        <span style={{
                          fontSize: typography.small.fontSize,
                          fontWeight: 600,
                          color: colors.textSecondary,
                          textAlign: "center",
                        }}>
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <style>{`
              @keyframes scrollLogos {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>

          {/* Course Catalog Section - Enhanced */}
          <div style={{ marginBottom: spacing.section }}>
            <div style={{ textAlign: "center", marginBottom: spacing.xxl }}>
              <h2
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  ...typography.h2,
                  color: colors.textPrimary,
                  marginBottom: spacing.md,
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                Our{" "}
                <span style={{ 
                  background: colors.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Course Catalog
                </span>
              </h2>
              <p 
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  ...typography.body,
                  color: colors.textSecondary,
                  maxWidth: "750px",
                  margin: "0 auto",
                  textAlign: "center",
                  fontWeight: 400,
                }}
              >
                Industry-aligned courses designed to make your students job-ready with hands-on projects and real-world applications
              </p>
            </div>

            <div className="course-catalog-grid" style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", 
              gap: spacing.lg,
              maxWidth: "1400px",
              margin: "0 auto",
            }}>
              {curriculumData.map((course, courseIndex) => (
                <div
                  key={courseIndex}
                  className={isVisible ? "fade-in-up" : ""}
                  style={{
                    animationDelay: `${courseIndex * 100}ms`,
                    background: colors.background,
                    border: `2px solid ${colors.border}`,
                    borderRadius: borderRadius.xl,
                    padding: spacing.xl,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: shadows.sm,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.primary;
                    e.currentTarget.style.boxShadow = shadows.lg;
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.border;
                    e.currentTarget.style.boxShadow = shadows.sm;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <h3 style={{
                    ...typography.h4,
                    color: colors.textPrimary,
                    marginBottom: spacing.sm,
                  }}>
                    {course.courseName}
                  </h3>
                  {course.subtitle && (
                    <p style={{
                      ...typography.body,
                      color: colors.textSecondary,
                      marginBottom: spacing.md,
                    }}>
                      {course.subtitle}
                    </p>
                  )}
                  <div style={{
                    display: "inline-block",
                    padding: `${spacing.xs} ${spacing.md}`,
                    background: colors.primaryBg,
                    color: colors.primary,
                    borderRadius: borderRadius.full,
                    fontSize: typography.small.fontSize,
                    fontWeight: 600,
                    marginBottom: spacing.lg,
                    width: "fit-content"
                  }}>
                    {course.duration}
                  </div>
                  <div style={{ marginTop: "auto" }}>
                    <Link
                      to={`/syllabus/${course.courseName.toLowerCase().replace(/\s+/g, '-')}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: spacing.xs,
                        padding: `${spacing.md} ${spacing.lg}`,
                        background: colors.primary,
                        color: "#ffffff",
                        borderRadius: borderRadius.md,
                        fontSize: typography.body.fontSize,
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        boxShadow: shadows.md,
                        width: "100%",
                        justifyContent: "center"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = colors.primaryLight;
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = shadows.lg;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = colors.primary;
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = shadows.md;
                      }}
                    >
                      View Syllabus <FaArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Aceai Labs Section - Enhanced */}
          <div style={{ marginTop: spacing.section, marginBottom: spacing.section }}>
            <div style={{ textAlign: "center", marginBottom: spacing.xxl }}>
              <h2
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  ...typography.h2,
                  color: colors.textPrimary,
                  marginBottom: spacing.md,
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                Let's Build Together with{" "}
                <span style={{ 
                  background: colors.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Aceai Labs
                </span>
              </h2>
              <p 
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  ...typography.bodyLarge,
                  color: colors.textSecondary,
                  maxWidth: "850px",
                  margin: "0 auto",
                  textAlign: "center",
                  fontWeight: 400,
                }}
              >
                We will conduct workshops, hackathons, and many more programs to transform your institution and empower your students with cutting-edge skills.
              </p>
            </div>

            <div
              className="aceai-labs-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                gap: spacing.lg,
                maxWidth: "1400px",
                margin: "0 auto",
              }}
            >
              {[
                {
                  icon: <FaChalkboardTeacher />,
                  title: "Workshops",
                  description: "Hands-on interactive workshops covering the latest technologies, AI trends, and industry best practices. From beginner to advanced levels.",
                  features: [
                    "Expert-led technical sessions",
                    "Real-world project demonstrations",
                    "Interactive Q&A sessions",
                    "Networking opportunities",
                    "Certificate of participation",
                    "Industry insights and trends",
                  ],
                  color: colors.gradient,
                },
                {
                  icon: <FaLaptopCode />,
                  title: "Hackathons",
                  description: "Competitive coding events that challenge students to solve real-world problems using AI, machine learning, and modern technologies.",
                  features: [
                    "Multi-day coding competitions",
                    "Industry-relevant problem statements",
                    "Expert judges and mentors",
                    "Prize pools and recognition",
                    "Team collaboration opportunities",
                    "Portfolio-building projects",
                  ],
                  color: "linear-gradient(135deg, #7C3AED, #EC4899)",
                },
                {
                  icon: <FaProjectDiagram />,
                  title: "Many More Programs",
                  description: "Comprehensive programs including bootcamps, mentorship initiatives, industry partnerships, and continuous learning opportunities.",
                  features: [
                    "Intensive bootcamp programs",
                    "One-on-one mentorship sessions",
                    "Industry partnership programs",
                    "Continuous learning pathways",
                    "Research collaboration opportunities",
                    "Startup incubation support",
                  ],
                  color: "linear-gradient(135deg, #14B8A6, #3B82F6)",
                },
              ].map((program, index) => (
                <div
                  key={index}
                  className={isVisible ? "fade-in-up" : ""}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    background: colors.background,
                    border: `2px solid ${colors.border}`,
                    borderRadius: borderRadius.xl,
                    padding: spacing.xl,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: shadows.sm,
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = shadows.xl;
                    e.currentTarget.style.borderColor = colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = shadows.sm;
                    e.currentTarget.style.borderColor = colors.border;
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      background: program.color,
                      borderRadius: borderRadius.lg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: spacing.lg,
                      color: "#ffffff",
                      fontSize: "36px",
                      boxShadow: shadows.md,
                    }}
                  >
                    {program.icon}
                  </div>

                  <h3
                    style={{
                      ...typography.h3,
                      color: colors.textPrimary,
                      marginBottom: spacing.md,
                    }}
                  >
                    {program.title}
                  </h3>

                  <p
                    style={{
                      ...typography.body,
                      color: colors.textSecondary,
                      marginBottom: spacing.lg,
                      flexGrow: 1,
                    }}
                  >
                    {program.description}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: spacing.sm, marginBottom: spacing.lg }}>
                    {program.features.map((feature, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: spacing.sm,
                          fontSize: typography.small.fontSize,
                          color: colors.textSecondary,
                        }}
                      >
                        <FaCheck
                          style={{
                            color: colors.primary,
                            fontSize: "14px",
                            flexShrink: 0,
                            marginTop: "4px",
                          }}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: "auto",
                      padding: `${spacing.md} ${spacing.lg}`,
                      background: colors.primaryBg,
                      borderRadius: borderRadius.md,
                      textAlign: "center",
                      fontSize: typography.body.fontSize,
                      fontWeight: 600,
                      color: colors.primary,
                    }}
                  >
                    Join Aceai Labs
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: spacing.xxl,
                textAlign: "center",
                padding: `${spacing.xxl} ${spacing.xl}`,
                background: colors.primaryBg,
                borderRadius: borderRadius.xl,
                border: `2px solid rgba(255, 108, 12, 0.2)`,
              }}
            >
              <h3
                style={{
                  ...typography.h3,
                  color: colors.textPrimary,
                  marginBottom: spacing.md,
                }}
              >
                Ready to Transform Your Campus?
              </h3>
              <p
                style={{
                  ...typography.body,
                  color: colors.textSecondary,
                  marginBottom: spacing.lg,
                  maxWidth: "600px",
                  margin: `0 auto ${spacing.lg}`,
                }}
              >
                Partner with Aceai Labs to bring innovative workshops, exciting hackathons, and comprehensive programs to your institution.
              </p>
              <a
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: spacing.sm,
                  padding: `${spacing.md} ${spacing.xl}`,
                  background: colors.primary,
                  color: "#ffffff",
                  borderRadius: borderRadius.md,
                  fontSize: typography.bodyLarge.fontSize,
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: shadows.md,
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = shadows.lg;
                  e.currentTarget.style.background = colors.primaryLight;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = shadows.md;
                  e.currentTarget.style.background = colors.primary;
                }}
              >
                Get Started with Aceai Labs <FaArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* FAQ Section - Enhanced */}
          <div style={{ marginBottom: spacing.section }}>
            <div style={{ textAlign: "center", marginBottom: spacing.xxl }}>
              <h2
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  ...typography.h2,
                  color: colors.textPrimary,
                  marginBottom: spacing.md,
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                Frequently Asked{" "}
                <span style={{ 
                  background: colors.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Questions
                </span>
              </h2>
              <p 
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  ...typography.body,
                  color: colors.textSecondary,
                  maxWidth: "750px",
                  margin: "0 auto",
                  textAlign: "center",
                  fontWeight: 400,
                }}
              >
                Get answers to common questions about our institutional partnership programs
              </p>
            </div>
            
            <div style={{ 
              maxWidth: "900px", 
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: spacing.md,
            }}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={isVisible ? "fade-in-up" : ""}
                  style={{
                    animationDelay: `${index * 80}ms`,
                    background: colors.background,
                    border: `2px solid ${colors.border}`,
                    borderRadius: borderRadius.md,
                    overflow: "hidden",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: shadows.sm,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.primary;
                    e.currentTarget.style.boxShadow = shadows.md;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.border;
                    e.currentTarget.style.boxShadow = shadows.sm;
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    style={{
                      width: "100%",
                      padding: spacing.lg,
                      background: "transparent",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: typography.body.fontSize,
                      fontWeight: 600,
                      color: colors.textPrimary,
                    }}
                  >
                    <span>{faq.q}</span>
                    <FaArrowUp
                      style={{
                        transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        color: colors.primary,
                        fontSize: "18px",
                        flexShrink: 0,
                        marginLeft: spacing.md,
                      }}
                    />
                  </button>
                  {openFaq === index && (
                    <p
                      style={{
                        padding: `0 ${spacing.lg} ${spacing.lg} ${spacing.lg}`,
                        fontSize: typography.body.fontSize,
                        color: colors.textSecondary,
                        lineHeight: 1.7,
                        margin: 0,
                        animation: "fadeIn 0.3s ease-in"
                      }}
                    >
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
            
            <style>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CampusConnect;
