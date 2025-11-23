import { useState } from "react";
import { FaCheck, FaGraduationCap, FaRocket, FaChalkboardTeacher, FaCloud, FaChartLine, FaHeadset, FaTrophy, FaHandshake, FaArrowUp } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import campusVideo from "./AceAI_Student_to_Professional_Journey.mp4";

function CampusConnect() {
  const [openFaq, setOpenFaq] = useState(null);
  const [ref, isVisible] = useScrollAnimation();

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
    {
      q: "What if students don't pass certification?",
      a: "We provide remedial support and additional training at no extra cost until certification is achieved.",
    },
    {
      q: "Can we track student progress?",
      a: "Yes. Real-time dashboard shows individual and batch-level progress, skills acquired, and placement outcomes.",
    },
    {
      q: "How many students can we enroll?",
      a: "Flexible. From 50 to 5000+ students. Pricing scales based on enrollment.",
    },
    {
      q: "What's your track record?",
      a: "200+ institutional partners, 15,000+ students trained, 95%+ placement rate, with 4.8/5 student satisfaction.",
    },
  ];

  return (
    <section id="campus-connect" ref={ref} className="section" style={{ position: "relative", background: "#ffffff", overflow: "hidden" }}>
      {/* Video Background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        overflow: "hidden",
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "cover",
            opacity: 0.15,
          }}
        >
          <source src={campusVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.9) 100%)",
          zIndex: 1,
        }} />
      </div>
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span 
            className={`training-badge ${isVisible ? "fade-in-up" : ""}`} 
            style={{ 
              marginBottom: "28px", 
              display: "inline-block",
              padding: "10px 24px",
              background: "linear-gradient(135deg, #006494, #0582CA)",
              color: "#ffffff",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              boxShadow: "0 4px 16px rgba(0, 100, 148, 0.3)",
            }}
          >
            🎓 Institutional Partnerships
          </span>
          <h1 
            className={`section-title ${isVisible ? "fade-in-up" : ""}`} 
            style={{ 
              fontSize: "56px", 
              fontWeight: 800, 
              lineHeight: "1.1",
              color: "#111827",
              marginBottom: "24px",
              letterSpacing: "-0.02em",
              maxWidth: "900px",
              margin: "0 auto 24px",
            }}
          >
            Transform Your Institution with{" "}
            <span style={{ 
              background: "linear-gradient(135deg, #006494, #0582CA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Aceai Campus Connect
            </span>
          </h1>
          <p 
            className={`section-subtitle ${isVisible ? "fade-in-up" : ""}`} 
            style={{ 
              fontSize: "20px", 
              color: "#4B5563",
              maxWidth: "750px", 
              margin: "0 auto 48px",
              lineHeight: "1.7",
              fontWeight: 400
            }}
          >
            Empower your students and faculty with cutting-edge AI, technical training, and industry expertise. Partner with Aceai to prepare your campus for the future.
          </p>
          
          {/* Stats Section */}
          <div 
            className={isVisible ? "fade-in-up" : ""}
            style={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: "60px", 
              marginTop: "48px", 
              flexWrap: "wrap",
              maxWidth: "1000px",
              margin: "48px auto 0",
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
                  background: "#FFF5F2",
                  borderRadius: "16px",
                  border: "1px solid rgba(0, 100, 148, 0.2)",
                  transition: "all 0.3s ease",
                  minWidth: "180px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 100, 148, 0.2)";
                  e.currentTarget.style.borderColor = "#006494";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(0, 100, 148, 0.2)";
                }}
              >
                <div style={{ 
                  fontSize: "36px", 
                  fontWeight: 800, 
                  color: "#006494",
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

        {/* Why Partner Section */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1.2fr 1fr", 
          gap: "80px", 
          marginBottom: "100px", 
          alignItems: "start" 
        }}>
          <div>
            <h2 
              className={isVisible ? "fade-in-up" : ""}
              style={{ 
                fontSize: "42px", 
                fontWeight: 700,
                color: "#111827",
                marginBottom: "24px",
                lineHeight: "1.2",
                letterSpacing: "-0.01em"
              }}
            >
              Why Partner with Aceai?
            </h2>
            <p 
              className={isVisible ? "fade-in-up" : ""}
              style={{ 
                fontSize: "18px", 
                lineHeight: "1.8", 
                marginBottom: "40px",
                color: "#4B5563",
                maxWidth: "600px"
              }}
            >
              Our comprehensive partnership program is designed to transform your institution's technical education capabilities. We provide end-to-end solutions that enhance student outcomes, boost placement rates, and elevate your institution's reputation.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
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
                { 
                  icon: <FaTrophy />, 
                  title: "Government-Recognized Certifications", 
                  desc: "Boost your institution's credibility with industry-recognized certifications that enhance your students' career prospects." 
                },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={isVisible ? "fade-in-up" : ""}
                  style={{ 
                    display: "flex", 
                    gap: "20px", 
                    alignItems: "flex-start",
                    padding: "24px",
                    background: "#F9FAFB",
                    borderRadius: "12px",
                    border: "1px solid #E5E7EB",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#FFF5F2";
                    e.currentTarget.style.borderColor = "#006494";
                    e.currentTarget.style.transform = "translateX(8px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 100, 148, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#F9FAFB";
                    e.currentTarget.style.borderColor = "#E5E7EB";
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ 
                    color: "#006494", 
                    fontSize: "24px", 
                    marginTop: "2px",
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ 
                      fontSize: "20px", 
                      fontWeight: 700, 
                      marginBottom: "10px",
                      color: "#111827",
                      lineHeight: "1.3"
                    }}>
                      {item.title}
                    </h4>
                    <p style={{ 
                      fontSize: "16px", 
                      color: "#6B7280",
                      lineHeight: "1.6",
                      margin: 0
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div 
              className={isVisible ? "fade-in-up" : ""}
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(2, 1fr)", 
                gap: "20px"
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
                    padding: "28px 20px",
                    textAlign: "center",
                    minHeight: "150px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#ffffff",
                    border: "2px solid #E5E7EB",
                    borderRadius: "16px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#006494";
                    e.currentTarget.style.background = "#FFF5F2";
                    e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 100, 148, 0.15)";
                    const icon = e.currentTarget.querySelector('[style*="fontSize"]');
                    if (icon) icon.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E5E7EB";
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                    const icon = e.currentTarget.querySelector('[style*="fontSize"]');
                    if (icon) icon.style.transform = "scale(1)";
                  }}
                >
                  <div style={{ 
                    fontSize: "42px", 
                    color: "#006494", 
                    marginBottom: "16px",
                    transition: "transform 0.3s ease"
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ 
                    fontSize: "15px", 
                    fontWeight: 600,
                    color: "#374151",
                    lineHeight: "1.4"
                  }}>
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What We Provide Section */}
        <div style={{ marginBottom: "100px" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 
              className={isVisible ? "fade-in-up" : ""}
              style={{ 
                fontSize: "48px", 
                fontWeight: 700,
                color: "#111827",
                marginBottom: "20px",
                lineHeight: "1.2",
                letterSpacing: "-0.01em"
              }}
            >
              Comprehensive Solutions for{" "}
              <span style={{ 
                background: "linear-gradient(135deg, #006494, #0582CA)",
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
                fontSize: "18px",
                color: "#6B7280",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: "1.7"
              }}
            >
              Everything you need to transform your institution's technical education and boost student success rates.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
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
                className={`${isVisible ? "fade-in-up" : ""}`}
                style={{
                  minHeight: "420px",
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                  background: "#ffffff",
                  border: "2px solid #E5E7EB",
                  borderRadius: "20px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#006494";
                  e.currentTarget.style.transform = "translateY(-12px)";
                  e.currentTarget.style.boxShadow = "0 20px 48px rgba(0, 100, 148, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E5E7EB";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.04)";
                }}
              >
                <div style={{ 
                  fontSize: "52px", 
                  color: "#006494", 
                  marginBottom: "24px",
                  transition: "transform 0.3s ease"
                }}>
                  {offering.icon}
                </div>
                <h3 style={{ 
                  fontSize: "24px", 
                  fontWeight: 700,
                  marginBottom: "16px",
                  color: "#111827",
                  lineHeight: "1.3"
                }}>
                  {offering.title}
                </h3>
                <p style={{ 
                  fontSize: "16px", 
                  lineHeight: 1.7, 
                  marginBottom: "28px", 
                  flexGrow: 1,
                  color: "#4B5563"
                }}>
                  {offering.desc}
                </p>
                <ul style={{ listStyle: "none", marginBottom: "28px", padding: 0 }}>
                  {offering.highlights.map((highlight, j) => (
                    <li 
                      key={j} 
                      style={{ 
                        fontSize: "15px", 
                        marginBottom: "12px", 
                        paddingLeft: "28px", 
                        position: "relative",
                        color: "#374151",
                        lineHeight: "1.6"
                      }}
                    >
                      <FaCheck style={{ 
                        position: "absolute", 
                        left: 0, 
                        color: "#006494", 
                        fontSize: "14px",
                        top: "3px"
                      }} />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/contact" 
                  style={{ 
                    color: "#006494", 
                    fontWeight: 600, 
                    fontSize: "15px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.3s ease",
                    width: "fit-content"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#0582CA";
                    e.currentTarget.style.gap = "12px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#006494";
                    e.currentTarget.style.gap = "8px";
                  }}
                >
                  Learn More <span style={{ fontSize: "18px" }}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div style={{ marginBottom: "100px" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 
              className={isVisible ? "fade-in-up" : ""}
              style={{ 
                fontSize: "48px", 
                fontWeight: 700,
                color: "#111827",
                marginBottom: "20px",
                lineHeight: "1.2",
                letterSpacing: "-0.01em"
              }}
            >
              We Deliver Results.{" "}
              <span style={{ 
                background: "linear-gradient(135deg, #006494, #0582CA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Here's How.
              </span>
            </h2>
            <p 
              className={isVisible ? "fade-in-up" : ""}
              style={{
                fontSize: "18px",
                color: "#6B7280",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: "1.7"
              }}
            >
              Proven methodologies and comprehensive support that drive measurable outcomes for your institution.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px" }}>
            {[
              {
                icon: <FaTrophy />,
                title: "Industry-Aligned & Future-Ready",
                desc: "Our curriculum is designed by industry leaders and updated monthly to reflect real-world demands. Your students learn what employers actually need.",
                stats: ["200+ partner companies", "Curriculum updated 12 times/year", "Live industry projects", "Expert mentorship included"],
              },
              {
                icon: <FaTrophy />,
                title: "Proven Excellence & Results",
                desc: "Over 5 years, we've trained 15,000+ students across 200+ institutions. Our track record speaks for itself.",
                stats: ["15,000+ students trained", "200+ institutional partners", "95% placement rate", "₹8-15 LPA average salary"],
              },
              {
                icon: <FaHandshake />,
                title: "Complete End-to-End Solution",
                desc: "From curriculum to placement, we handle everything. Your institution can focus on education while we ensure employment outcomes.",
                stats: ["Curriculum design", "Faculty training", "Student support", "Placement assistance"],
              },
              {
                icon: <FaArrowUp />,
                title: "Affordable & Scalable Growth",
                desc: "Flexible pricing models that work with your budget. Scale from 50 to 5000+ students without infrastructure investment.",
                stats: ["No upfront infrastructure cost", "Flexible pricing models", "Scalable to any size", "ROI in 6-12 months"],
              },
            ].map((reason, i) => (
              <div 
                key={i} 
                className={`${isVisible ? "fade-in-up" : ""}`}
                style={{ 
                  padding: "40px",
                  background: "#ffffff",
                  border: "2px solid #E5E7EB",
                  borderRadius: "20px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#006494";
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(0, 100, 148, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E5E7EB";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.04)";
                }}
              >
                <div style={{ 
                  fontSize: "52px", 
                  color: "#006494", 
                  marginBottom: "24px"
                }}>
                  {reason.icon}
                </div>
                <h3 style={{ 
                  fontSize: "26px", 
                  fontWeight: 700,
                  marginBottom: "16px",
                  color: "#111827",
                  lineHeight: "1.3"
                }}>
                  {reason.title}
                </h3>
                <p style={{ 
                  fontSize: "16px", 
                  lineHeight: 1.7, 
                  marginBottom: "28px",
                  color: "#4B5563"
                }}>
                  {reason.desc}
                </p>
                <div style={{ 
                  background: "linear-gradient(135deg, rgba(0, 100, 148, 0.08), rgba(5, 130, 202, 0.08))", 
                  border: "1px solid rgba(0, 100, 148, 0.2)", 
                  borderRadius: "12px", 
                  padding: "24px" 
                }}>
                  {reason.stats.map((stat, j) => (
                    <div 
                      key={j} 
                      style={{ 
                        fontSize: "15px", 
                        marginBottom: "12px", 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "10px",
                        color: "#374151"
                      }}
                    >
                      <FaCheck style={{ 
                        color: "#006494", 
                        fontSize: "14px",
                        flexShrink: 0
                      }} />
                      <span style={{ lineHeight: "1.5" }}>{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 
              className={isVisible ? "fade-in-up" : ""}
                style={{
                fontSize: "42px", 
                fontWeight: 700,
                color: "#111827",
                marginBottom: "16px",
                lineHeight: "1.2"
              }}
            >
              Frequently Asked Questions
            </h2>
            <p 
              className={isVisible ? "fade-in-up" : ""}
                    style={{
                fontSize: "18px",
                color: "#6B7280",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.7"
              }}
            >
              Everything you need to know about partnering with Aceai Campus Connect
            </p>
          </div>
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "16px",
            maxWidth: "900px",
            margin: "0 auto"
          }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={isVisible ? "fade-in-up" : ""}
                style={{
                  padding: "28px 32px",
                  cursor: "pointer",
                  background: openFaq === i ? "#FFF5F2" : "#ffffff",
                  border: openFaq === i ? "2px solid #006494" : "2px solid #E5E7EB",
                  borderRadius: "16px",
                  transition: "all 0.3s ease",
                  boxShadow: openFaq === i ? "0 8px 24px rgba(0, 100, 148, 0.15)" : "0 2px 8px rgba(0, 0, 0, 0.04)",
                }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                onMouseEnter={(e) => {
                  if (openFaq !== i) {
                    e.currentTarget.style.borderColor = "#006494";
                    e.currentTarget.style.background = "#FFF5F2";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (openFaq !== i) {
                    e.currentTarget.style.borderColor = "#E5E7EB";
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.transform = "translateX(0)";
                  }
                }}
              >
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "flex-start",
                  gap: "20px"
                }}>
                  <h5 style={{ 
                    fontSize: "18px", 
                    fontWeight: 600, 
                    marginBottom: openFaq === i ? "20px" : 0,
                    color: "#111827",
                    lineHeight: "1.4",
                    flex: 1
                  }}>
                    {faq.q}
                  </h5>
                  <span style={{ 
                    color: "#006494", 
                    fontSize: "24px", 
                    transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", 
                    transition: "transform 0.3s ease",
                    flexShrink: 0,
                    marginTop: "2px"
                  }}>
                    ▼
                  </span>
                </div>
                {openFaq === i && (
                  <p style={{ 
                    fontSize: "16px", 
                    lineHeight: "1.7", 
                    color: "#4B5563",
                    margin: 0,
                    animation: "fadeIn 0.3s ease-in"
                  }}>
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
          `}</style>
        </div>

        {/* CTA Section */}
        <div
          className={isVisible ? "fade-in-up" : ""}
          style={{
            marginTop: "100px",
            padding: "80px 60px",
            background: "linear-gradient(135deg, #006494, #0582CA)",
            borderRadius: "24px",
            textAlign: "center",
            color: "#ffffff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative Pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M50 50 L60 60 L50 70 L40 60 Z'/%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.3,
            }}
          />
          
          <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: 800,
                marginBottom: "20px",
                lineHeight: "1.2",
                letterSpacing: "-0.01em",
              }}
            >
            Ready to Transform Your Institution?
          </h2>
            <p
              style={{
                fontSize: "20px",
                marginBottom: "40px",
                lineHeight: "1.7",
                opacity: 0.95,
              }}
            >
              Join 200+ institutions already partnered with Aceai. Let's discuss how we can elevate your students' success and boost placement rates.
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="/contact"
                style={{
                  padding: "18px 40px",
                  background: "#ffffff",
                  color: "#006494",
                  borderRadius: "12px",
                  fontSize: "17px",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.3)";
                  e.currentTarget.style.background = "#FFF5F2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.2)";
                  e.currentTarget.style.background = "#ffffff";
                }}
              >
                Schedule a Consultation <span style={{ fontSize: "20px" }}>→</span>
              </a>
              <a
                href="tel:+917349432553"
                style={{
                  padding: "18px 40px",
                  background: "transparent",
                  color: "#ffffff",
                  border: "2px solid #ffffff",
                  borderRadius: "12px",
                  fontSize: "17px",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 255, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Call Us: +91 7349432553
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampusConnect;

