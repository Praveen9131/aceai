function CTABanner() {
  return (
    <section 
      style={{
        background: "#F5F5F5",
        padding: "80px var(--container-padding-desktop)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
          borderRadius: "16px",
          padding: "64px 48px",
          maxWidth: "1200px",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Pattern Overlay - Bottom Half */}
        <svg
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "50%",
            opacity: 0.3,
            pointerEvents: "none",
          }}
          viewBox="0 0 400 200"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="wavePattern" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 0 25 Q 25 10, 50 25 T 100 25"
                stroke="var(--color-yellow)"
                strokeWidth="2"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wavePattern)" />
        </svg>

        <div
          style={{
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "12px",
              lineHeight: 1.2,
              fontFamily: "sans-serif",
            }}
          >
            Join the new era in programming.
          </h2>
          <h3
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "32px",
              lineHeight: 1.2,
              fontFamily: "sans-serif",
            }}
          >
            Become a 100x Developer!
          </h3>
          <button
            style={{
              background: "var(--color-blue)",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              padding: "16px 40px",
              fontSize: "18px",
              fontWeight: 600,
              fontFamily: "sans-serif",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-primary-dark)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(6, 7, 113, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--color-blue)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Request Callback
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;

