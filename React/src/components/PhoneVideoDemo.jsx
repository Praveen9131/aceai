import { useState } from "react";
import { BsChatDots, BsCameraVideo, BsPersonBadge, BsPlayCircle } from "react-icons/bs";
import videoSrc from "../sections/Generating_Video_Of_Opening_Closing_Eyes.mp4";

// (Duplicate implementation removed below; single default export above)
export default function PhoneVideoDemo() {
  const [activeTab, setActiveTab] = useState("chat");

  const navItems = [
    { id: "chat", label: "Chat", icon: <BsChatDots size={22} /> },
    { id: "video", label: "Video", icon: <BsCameraVideo size={22} /> },
    { id: "content", label: "Content", icon: <BsPlayCircle size={22} /> },
    { id: "growth", label: "My Growth", icon: <BsPersonBadge size={22} /> },
  ];

  return (
    <section
      aria-label="Phone Video Demo"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 16px 100px",
        background: "linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)"
      }}
    >
      <div
        style={{
          position: "relative",
          width: "360px",               // slightly wider
          maxWidth: "88vw",
          aspectRatio: "9 / 18.5",      // slightly shorter (less tall)
          borderRadius: "42px",
          background: "linear-gradient(145deg, #1b1c1f, #2a2b2e)", // metallic frame look
          boxShadow:
            "0 24px 70px rgba(0,0,0,0.30), 0 2px 0 rgba(255,255,255,0.06) inset, 0 -2px 0 rgba(0,0,0,0.4) inset, 0 0 0 6px rgba(16,16,18,0.9)", // outer chamfer
          padding: "16px",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Notch */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "36%",
            height: "22px",
            background: "linear-gradient(180deg, #0C0C0D 0%, #151518 100%)",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
            boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset, 0 4px 10px rgba(0,0,0,0.35)",
          }}
        />

        {/* Screen container */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "30px",
            overflow: "hidden",
            background: "#111214",
            boxShadow:
              "inset 0 0 0 1px rgba(255,255,255,0.04), inset 0 14px 26px rgba(255,255,255,0.02), inset 0 -20px 30px rgba(0,0,0,0.35)",
          }}
        >
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Bottom Navigation Bar */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "#ffffff",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              padding: "12px 8px 8px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px 8px",
                  color: activeTab === item.id ? "#1E293B" : "#6B7280",
                  transition: "color 0.2s ease",
                }}
              >
                <div style={{ 
                  color: activeTab === item.id ? "#1E293B" : "#6B7280",
                  transition: "color 0.2s ease"
                }}>
                  {item.icon}
                </div>
                <span style={{ 
                  fontSize: "10px", 
                  fontWeight: 500,
                  color: activeTab === item.id ? "#1E293B" : "#6B7280",
                  transition: "color 0.2s ease"
                }}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Side buttons (decorative) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-3px",
            top: "90px",
            width: "4px",
            height: "42px",
            background: "linear-gradient(180deg, #2f3033, #1f2022)",
            borderTopLeftRadius: "3px",
            borderBottomLeftRadius: "3px",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-3px",
            top: "140px",
            width: "4px",
            height: "62px",
            background: "linear-gradient(180deg, #2f3033, #1f2022)",
            borderTopRightRadius: "3px",
            borderBottomRightRadius: "3px",
          }}
        />
      </div>
    </section>
  );
}




