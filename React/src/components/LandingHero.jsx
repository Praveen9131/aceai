import { useMemo } from "react";
import { ShaderAnimation } from "@/components/ui/shader-animation";

export default function LandingHero() {
  const colors = useMemo(
    () => ({
      primary: "#006494",
      primaryLight: "#0582CA",
      text: "#111827",
      textMuted: "#6B7280",
      dark: "#0B0B0C",
      bg: "#FFFFFF",
      gradient: "linear-gradient(135deg, #006494, #0582CA)",
    }),
    []
  );

  const typography = {
    hero: {
      fontSize: "clamp(40px, 5.2vw, 64px)",
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
    },
    sub: { fontSize: "clamp(16px, 1.8vw, 20px)", lineHeight: 1.7, fontWeight: 400 },
  };

  return (
    <section
      aria-label="Hero"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "82vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #050505 0%, #0d0d0d 100%)",
      }}
    >
      <div style={{ position: "absolute", inset: 0, opacity: 0.55 }}>
        <ShaderAnimation />
      </div>
      {/* Ribbon Background */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: 0.7, filter: "blur(0.2px)" }}
        >
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0582CA" />
              <stop offset="100%" stopColor="#006494" />
            </linearGradient>
          </defs>

          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={i}
              d={`M -100,${250 + i * 18}
                  C 250,${80 + i * 26}  450,${460 + i * 22} 800,${180 + i * 28}
                  S 1350,${-20 + i * 30} 1720,${260 + i * 26}`}
              fill="none"
              stroke="url(#grad)"
              strokeOpacity={0.25 - i * 0.03}
              strokeWidth={i === 2 ? 18 : 12}
              style={{
                transform: `rotate(${i * 0.6}deg)`,
                transformOrigin: "50% 50%",
              }}
            />
          ))}

          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={`inner-${i}`}
              d={`M -120,${520 + i * 16}
                  C 280,${420 + i * 26}  520,${620 + i * 20} 900,${420 + i * 26}
                  S 1480,${300 + i * 24} 1740,${540 + i * 22}`}
              fill="none"
              stroke="url(#grad)"
              strokeOpacity={0.18 - i * 0.02}
              strokeWidth={i === 1 ? 10 : 8}
              style={{
                transform: `rotate(${-2 + i * 0.4}deg)`,
                transformOrigin: "50% 50%",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1100, textAlign: "center", padding: "0 24px" }}>
        <h1 style={{ ...typography.hero, color: "#f8fafc", margin: "0 0 12px" }}>
          Become a{" "}
          <span
            style={{
              background: colors.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Generative‑AI Wizard
          </span>
        </h1>

        <p style={{ ...typography.sub, color: "#e2e8f0", margin: "0 auto 24px", maxWidth: 760 }}>
          From Zero to Pro in 6 months. NOT another ChatGPT course.
        </p>

        <p
          style={{
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
            color: "#94a3b8",
            margin: "6px 0 28px",
          }}
        >
          Cohort 7 kicks off in Q1 2026
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#waitlist"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 22px",
              borderRadius: 12,
              background: colors.gradient,
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              boxShadow: "0 10px 30px rgba(0,100,148,0.25)",
              transition: "transform .2s ease, box-shadow .2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 14px 38px rgba(0,100,148,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,100,148,0.25)";
            }}
          >
            Join Waitlist
          </a>

          <a
            href="#callback"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 22px",
              borderRadius: 12,
              background: colors.dark,
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
              transition: "transform .2s ease, box-shadow .2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 14px 32px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.25)";
            }}
          >
            Request Callback
          </a>
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
            alt="Team collaborating with AI tools"
            style={{
              width: "100%",
              maxWidth: 960,
              borderRadius: 28,
              boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

