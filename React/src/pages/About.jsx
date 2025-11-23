import { useEffect } from "react";
import { FaRocket, FaCode, FaGraduationCap, FaBrain, FaLaptopCode, FaUsers, FaCheckCircle, FaAward } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function About() {
  const [ref, isVisible] = useScrollAnimation();

  useEffect(() => {
    document.title = "About Us - Ace AI";
    document.body.style.background = "#ffffff";
    return () => {
      document.body.style.background = "";
      document.title = "Ace AI - EdTech & Software Solutions";
    };
  }, []);

  const typography = {
    hero: { 
      fontSize: "clamp(42px, 5.5vw, 68px)", 
      fontWeight: 800, 
      lineHeight: 1.15, 
      letterSpacing: "-0.03em",
    },
    h2: { 
      fontSize: "clamp(32px, 4.2vw, 50px)", 
      fontWeight: 700, 
      lineHeight: 1.25, 
      letterSpacing: "-0.015em",
    },
    h3: { 
      fontSize: "clamp(26px, 3.2vw, 36px)", 
      fontWeight: 700, 
      lineHeight: 1.35, 
      letterSpacing: "-0.01em",
    },
    body: { 
      fontSize: "clamp(16px, 1.9vw, 18px)", 
      fontWeight: 400, 
      lineHeight: 1.75,
      letterSpacing: "0.01em",
    },
    bodyLarge: { 
      fontSize: "clamp(18px, 2.1vw, 22px)", 
      fontWeight: 400, 
      lineHeight: 1.7,
      letterSpacing: "0.01em",
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
    primary: "var(--color-primary)",
    primaryLight: "var(--color-primary-light)",
    primaryDark: "var(--color-primary-dark)",
    primaryBg: "rgba(255, 108, 12, 0.08)",
    textPrimary: "#111827",
    textSecondary: "#374151",
    textTertiary: "#6B7280",
    border: "#E5E7EB",
    background: "#FFFFFF",
    backgroundLight: "#F9FAFB",
    gradient: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
  };

  const shadows = {
    sm: "0 2px 8px rgba(0, 0, 0, 0.04)",
    md: "0 4px 16px rgba(255, 108, 12, 0.12)",
    lg: "0 8px 24px rgba(255, 108, 12, 0.15)",
    xl: "0 16px 40px rgba(255, 108, 12, 0.2)",
  };

  const borderRadius = {
    md: "12px",
    lg: "16px",
    xl: "20px",
    full: "999px",
  };

  return (
    <div style={{ 
      background: colors.background, 
      minHeight: "100vh",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Roboto', sans-serif",
    }}>
      <Navbar />
      <section 
        ref={ref} 
        id="about" 
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
          
          {/* Hero Section */}
          <div style={{ 
            textAlign: "center", 
            marginBottom: spacing.xxl,
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
                fontSize: "clamp(12px, 1.4vw, 14px)",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                boxShadow: "0 4px 16px rgba(255, 108, 12, 0.3)",
                marginBottom: spacing.lg,
              }}
            >
              About Ace AI
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
              About{" "}
              <span style={{ 
                background: colors.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}>
                Ace AI
              </span>
            </h1>
            
            <p
              className={isVisible ? "fade-in-up" : ""}
              style={{
                ...typography.bodyLarge,
                color: colors.textSecondary,
                maxWidth: "900px",
                margin: `0 auto ${spacing.xl}`,
                textAlign: "center",
                fontWeight: 400,
                lineHeight: 1.8,
              }}
            >
              We provide AI services, develop robust end-to-end applications, and deliver industry-standard training to students. Our expertise spans from AI development and integration to complete application solutions, ensuring businesses get comprehensive technology support. We're committed to empowering students with industry-aligned skills through our training programs.
            </p>
          </div>

          {/* Key Points Section */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: spacing.lg,
            maxWidth: "1200px",
            margin: "0 auto",
            marginBottom: spacing.xxl,
          }}>
            {[
              {
                icon: <FaBrain />,
                title: "AI Services",
                description: "We provide comprehensive AI solutions including development, integration, and consulting to help businesses leverage artificial intelligence.",
              },
              {
                icon: <FaCode />,
                title: "End-to-End Development",
                description: "We are strong in developing complete applications from frontend to backend, ensuring scalable and robust solutions.",
              },
              {
                icon: <FaGraduationCap />,
                title: "Industry-Standard Training",
                description: "We provide training to students with industry-standard curriculum, preparing them for real-world technology challenges.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  animationDelay: `${i * 100}ms`,
                  background: colors.background,
                  border: `2px solid ${colors.border}`,
                  borderRadius: borderRadius.xl,
                  padding: `${spacing.xl} ${spacing.lg}`,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: shadows.sm,
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.primary;
                  e.currentTarget.style.boxShadow = shadows.lg;
                  e.currentTarget.style.transform = "translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.boxShadow = shadows.sm;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ 
                  fontSize: "48px", 
                  color: colors.primary, 
                  marginBottom: spacing.md,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {item.icon}
                </div>
                <h3 style={{ 
                  ...typography.h3,
                  color: colors.textPrimary,
                  marginBottom: spacing.md,
                  textAlign: "center",
                  fontWeight: 700,
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  ...typography.body,
                  color: colors.textSecondary,
                  textAlign: "center",
                  fontWeight: 400,
                  lineHeight: 1.7,
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;

