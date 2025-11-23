import { useState, useEffect } from "react";
import { 
  SiPython, 
  SiOpenai, 
  SiTensorflow, 
  SiPytorch, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiGooglecloud,
  SiPostgresql,
  SiMongodb,
  SiFastapi,
  SiFlask,
  SiDjango
} from "react-icons/si";
import { FaBrain, FaRobot, FaLaptopCode, FaJava } from "react-icons/fa";

function TechIcons({ position = "right" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const technologies = [
    { icon: <SiPython />, name: "Python", delay: 0 },
    { icon: <SiOpenai />, name: "OpenAI", delay: 0.2 },
    { icon: <SiTensorflow />, name: "TensorFlow", delay: 0.4 },
    { icon: <SiPytorch />, name: "PyTorch", delay: 0.6 },
    { icon: <SiReact />, name: "React", delay: 0.8 },
    { icon: <SiJavascript />, name: "JavaScript", delay: 1.0 },
    { icon: <SiNodedotjs />, name: "Node.js", delay: 1.2 },
    { icon: <FaJava />, name: "Java", delay: 1.4 },
    { icon: <SiFastapi />, name: "FastAPI", delay: 1.6 },
    { icon: <SiFlask />, name: "Flask", delay: 1.8 },
    { icon: <SiDjango />, name: "Django", delay: 2.0 },
    { icon: <SiMongodb />, name: "MongoDB", delay: 2.2 },
    { icon: <SiPostgresql />, name: "PostgreSQL", delay: 2.4 },
    { icon: <SiDocker />, name: "Docker", delay: 2.6 },
    { icon: <SiKubernetes />, name: "Kubernetes", delay: 2.8 },
    { icon: <SiAmazon />, name: "AWS", delay: 3.0 },
    { icon: <SiGooglecloud />, name: "GCP", delay: 3.2 },
    { icon: <FaBrain />, name: "LLMs", delay: 3.4 },
    { icon: <FaRobot />, name: "AI Agents", delay: 3.6 },
    { icon: <FaLaptopCode />, name: "Frameworks", delay: 3.8 },
  ];

  if (!mounted) return null;

  return (
    <div
      style={{
        position: "fixed",
        [position]: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        zIndex: 100,
        pointerEvents: "none",
      }}
      className="tech-icons-container"
    >
      {technologies.map((tech, index) => (
        <div
          key={index}
          style={{
            width: "56px",
            height: "56px",
            background: "linear-gradient(135deg, #006494, #0582CA)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: "28px",
            boxShadow: "0 4px 16px rgba(0, 100, 148, 0.3)",
            animation: position === "right" ? "floatright 4s ease-in-out infinite" : "floatleft 4s ease-in-out infinite",
            animationDelay: `${tech.delay}s`,
            transition: "all 0.3s ease",
            pointerEvents: "auto",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.15) translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 100, 148, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 100, 148, 0.3)";
          }}
          title={tech.name}
        >
          {tech.icon}
        </div>
      ))}
      <style>{`
        @keyframes floatright {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(-10px) translateY(-10px);
          }
          50% {
            transform: translateX(0) translateY(-15px);
          }
          75% {
            transform: translateX(10px) translateY(-10px);
          }
        }
        
        @keyframes floatleft {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(10px) translateY(-10px);
          }
          50% {
            transform: translateX(0) translateY(-15px);
          }
          75% {
            transform: translateX(-10px) translateY(-10px);
          }
        }

        @media (max-width: 1200px) {
          .tech-icons-container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default TechIcons;

