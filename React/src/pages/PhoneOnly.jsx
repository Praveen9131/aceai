import PhoneVideoDemo from "../components/PhoneVideoDemo";

export default function PhoneOnly() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)",
        padding: "40px clamp(16px, 6vw, 80px)",
      }}
    >
      {/* Right-aligned phone, similar to the reference */}
      <div style={{ width: "min(420px, 44vw)" }}>
        <PhoneVideoDemo />
      </div>
    </div>
  );
}


