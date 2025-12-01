import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCheck, FaGraduationCap, FaRocket, FaChalkboardTeacher, FaCloud, FaChartLine, FaHeadset, FaTrophy, FaHandshake, FaArrowUp, FaArrowDown, FaArrowRight, FaUsers, FaUniversity, FaBullseye, FaBriefcase, FaBook, FaCode, FaBrain, FaRobot, FaCertificate, FaLaptop, FaGlobe, FaStar, FaJava, FaPlay, FaFileAlt, FaCog, FaComments, FaClipboardList, FaArrowLeft } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

// Import curriculum data - this will be shared
import { curriculumData } from "../data/curriculumData";

function Syllabus() {
  const { courseSlug } = useParams();
  const [ref] = useScrollAnimation();
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    document.title = "Course Syllabus - AceAI Technology";
    document.body.style.background = "#ffffff";
    
    // Find course by slug
    if (courseSlug) {
      const course = curriculumData.find(c => 
        c.courseName.toLowerCase().replace(/\s+/g, '-') === courseSlug
      );
      setSelectedCourse(course || null);
    } else {
      // If no slug, show all courses
      setSelectedCourse(null);
    }

    return () => {
      document.body.style.background = "";
      document.title = "AceAI Technology - AI Solutions, Training & Development";
    };
  }, [courseSlug]);

  const getIcon = (iconType) => {
    switch(iconType) {
      case "play": return <FaPlay />;
      case "doc": return <FaFileAlt />;
      case "gear": return <FaCog />;
      case "chat": return <FaComments />;
      case "grad": return <FaGraduationCap />;
      case "briefcase": return <FaBriefcase />;
      default: return <FaFileAlt />;
    }
  };

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navbar />
      <section ref={ref} id="syllabus" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="container" style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(24px, 5vw, 64px)" }}>
          
          {/* Back Button */}
          <Link
            to="/campus-connect"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "40px",
              color: "#006494",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: 600,
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <FaArrowLeft /> Back to Campus Connect
          </Link>

          {selectedCourse ? (
            // Show single course syllabus
            <div>
              {/* Course Header */}
              <div style={{ textAlign: "center", marginBottom: "60px" }}>
                <h1 style={{ 
                  fontSize: "48px", 
                  fontWeight: 700,
                  marginBottom: "12px",
                  color: "#111827",
                  lineHeight: "1.2"
                }}>
                  {selectedCourse.courseName}
                </h1>
                {selectedCourse.subtitle && (
                  <p style={{ 
                    fontSize: "20px", 
                    color: "#6B7280",
                    marginBottom: "16px",
                    lineHeight: "1.6"
                  }}>
                    {selectedCourse.subtitle}
                  </p>
                )}
                <div style={{
                  display: "inline-block",
                  padding: "8px 20px",
                  background: "#FFF5F2",
                  color: "#006494",
                  borderRadius: "24px",
                  fontSize: "16px",
                  fontWeight: 600,
                  marginTop: "8px"
                }}>
                  {selectedCourse.duration}
                </div>
              </div>

              {/* Timeline Curriculum */}
              <div style={{ position: "relative", paddingLeft: "120px" }}>
                {/* Vertical Timeline Line */}
                <div
                  style={{
                    position: "absolute",
                    left: "40px",
                    top: 0,
                    bottom: 0,
                    width: "3px",
                    background: "linear-gradient(180deg, #006494, #0582CA, #006494)",
                    borderRadius: "2px"
                  }}
                />

                {/* Modules */}
                {selectedCourse.modules.map((module, moduleIndex) => {
                  const isLastModule = moduleIndex === selectedCourse.modules.length - 1;

                  return (
                    <div
                      key={moduleIndex}
                      style={{
                        position: "relative",
                        marginBottom: isLastModule ? "0" : "40px",
                        paddingBottom: isLastModule ? "0" : "40px"
                      }}
                    >
                      {/* Week Label & Dot */}
                      <div style={{
                        position: "absolute",
                        left: "-100px",
                        top: "8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "80px"
                      }}>
                        <div style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          background: "#006494",
                          border: "4px solid #ffffff",
                          boxShadow: "0 2px 8px rgba(0, 100, 148, 0.3)",
                          position: "relative",
                          zIndex: 2
                        }} />
                        <div style={{
                          fontSize: "13px",
                          fontWeight: 700,
                          color: "#006494",
                          marginTop: "8px",
                          textAlign: "center",
                          lineHeight: "1.2"
                        }}>
                          {module.week}
                        </div>
                      </div>

                      {/* Module Card */}
                      <div style={{
                        background: "#FFFFFF",
                        border: "2px solid #006494",
                        borderRadius: "20px",
                        padding: "32px 40px",
                        transition: "all 0.3s ease",
                        position: "relative",
                        boxShadow: "0 2px 8px rgba(0, 100, 148, 0.1)"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#FFF5F2";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 100, 148, 0.2)";
                        e.currentTarget.style.transform = "translateX(8px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#FFFFFF";
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 100, 148, 0.1)";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                      >
                        {/* Module Header with Arrow */}
                        <div style={{ marginBottom: "24px", position: "relative" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                            <h4 style={{
                              fontSize: "24px",
                              fontWeight: 700,
                              color: "#111827",
                              lineHeight: "1.3",
                              margin: 0,
                              letterSpacing: "0.01em"
                            }}>
                              {module.title}
                            </h4>
                            {moduleIndex < selectedCourse.modules.length - 1 && (
                              <FaArrowDown style={{ color: "#9CA3AF", fontSize: "18px", marginTop: "4px" }} />
                            )}
                          </div>
                          <p style={{
                            fontSize: "16px",
                            color: "#6B7280",
                            margin: 0,
                            lineHeight: "1.6"
                          }}>
                            {module.description}
                          </p>
                        </div>

                        {/* Module Summary - Clean Format */}
                        <div style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "20px",
                          marginBottom: "24px",
                          paddingBottom: "24px",
                          borderBottom: "1px solid #E5E7EB"
                        }}>
                          {module.liveSessions > 0 && (
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#374151" }}>
                              <div style={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                background: "#006494",
                                flexShrink: 0
                              }} />
                              <span style={{ fontWeight: 600 }}>{module.liveSessions} LIVE SESSION{module.liveSessions > 1 ? "S" : ""}</span>
                            </div>
                          )}
                          {module.assignments > 0 && (
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#374151" }}>
                              <FaClipboardList style={{ color: "#006494", fontSize: "14px", flexShrink: 0 }} />
                              <span style={{ fontWeight: 600 }}>{module.assignments} ASSIGNMENT{module.assignments > 1 ? "S" : ""}</span>
                            </div>
                          )}
                          {module.capstone && (
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#374151" }}>
                              <FaBriefcase style={{ color: "#006494", fontSize: "14px", flexShrink: 0 }} />
                              <span style={{ fontWeight: 600 }}>CAPSTONE PROJECT</span>
                            </div>
                          )}
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#374151" }}>
                            <FaBook style={{ color: "#006494", fontSize: "14px", flexShrink: 0 }} />
                            <span style={{ fontWeight: 600 }}>{module.lessons.length} LESSON{module.lessons.length > 1 ? "S" : ""}</span>
                          </div>
                        </div>

                        {/* Lessons List */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "14px",
                                padding: "14px 16px",
                                background: "#F9FAFB",
                                borderRadius: "10px",
                                border: "1px solid #E5E7EB",
                                transition: "all 0.2s ease"
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#006494";
                                e.currentTarget.style.background = "#FFF5F2";
                                e.currentTarget.style.transform = "translateX(4px)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "#E5E7EB";
                                e.currentTarget.style.background = "#F9FAFB";
                                e.currentTarget.style.transform = "translateX(0)";
                              }}
                            >
                              <div style={{
                                color: "#006494",
                                fontSize: "18px",
                                marginTop: "2px",
                                flexShrink: 0
                              }}>
                                {getIcon(lesson.icon)}
                              </div>
                              <div style={{ flex: 1 }}>
                                <div style={{
                                  fontSize: "11px",
                                  fontWeight: 600,
                                  color: "#9CA3AF",
                                  marginBottom: "6px",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.8px"
                                }}>
                                  {lesson.type}
                                </div>
                                <div style={{
                                  fontSize: "15px",
                                  fontWeight: 600,
                                  color: "#111827",
                                  lineHeight: "1.5"
                                }}>
                                  {lesson.title}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            // Show all courses list
            <div>
              <div style={{ textAlign: "center", marginBottom: "60px" }}>
                <h1 style={{ 
                  fontSize: "48px", 
                  fontWeight: 700,
                  marginBottom: "20px",
                  color: "#111827",
                  lineHeight: "1.2"
                }}>
                  Course{" "}
                  <span style={{ 
                    background: "linear-gradient(135deg, #006494, #0582CA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Syllabi
                  </span>
                </h1>
                <p style={{
                  fontSize: "18px",
                  color: "#6B7280",
                  maxWidth: "700px",
                  margin: "0 auto",
                  lineHeight: "1.7"
                }}>
                  Select a course to view its detailed curriculum and syllabus
                </p>
              </div>

              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
                gap: "24px" 
              }}>
                {curriculumData.map((course, index) => (
                  <Link
                    key={index}
                    to={`/syllabus/${course.courseName.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{
                      textDecoration: "none",
                      color: "inherit"
                    }}
                  >
                    <div
                      style={{
                        background: "#ffffff",
                        border: "2px solid #E5E7EB",
                        borderRadius: "16px",
                        padding: "32px",
                        transition: "all 0.3s ease",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#006494";
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 100, 148, 0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#E5E7EB";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <h3 style={{
                        fontSize: "24px",
                        fontWeight: 700,
                        color: "#111827",
                        marginBottom: "12px",
                        lineHeight: "1.3"
                      }}>
                        {course.courseName}
                      </h3>
                      {course.subtitle && (
                        <p style={{
                          fontSize: "15px",
                          color: "#6B7280",
                          marginBottom: "16px",
                          lineHeight: "1.5"
                        }}>
                          {course.subtitle}
                        </p>
                      )}
                      <div style={{
                        display: "inline-block",
                        padding: "6px 16px",
                        background: "#FFF5F2",
                        color: "#006494",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: 600,
                        marginTop: "auto",
                        marginBottom: "16px"
                      }}>
                        {course.duration}
                      </div>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#006494",
                        fontSize: "15px",
                        fontWeight: 600
                      }}>
                        View Syllabus <FaArrowRight />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Syllabus;

