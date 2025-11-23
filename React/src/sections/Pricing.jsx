import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 9999,
    annualPrice: 7999,
    features: [
      "Social media management (basic)",
      "1 training course",
      "Email support",
      "Monthly analytics report",
      "Basic content creation",
    ],
    popular: false,
  },
  {
    name: "Professional",
    monthlyPrice: 24999,
    annualPrice: 19999,
    features: [
      "Complete social media management",
      "3 training courses",
      "AI consultation (4 hours/month)",
      "Priority support",
      "Bi-weekly strategy calls",
      "Advanced analytics",
      "Custom content strategy",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    features: [
      "Custom social strategy",
      "Unlimited training access",
      "Custom AI solution development",
      "Dedicated account manager",
      "24/7 support",
      "Custom integrations",
      "White-label options",
    ],
    popular: false,
    custom: true,
  },
];

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="section" style={{ background: "linear-gradient(135deg, rgba(10, 14, 39, 0.9), rgba(30, 58, 138, 0.8))" }}>
      <div className="container">
        <h2 className="section-title">Plans for Every Business Size</h2>
        
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
          <span style={{ color: isAnnual ? "#E8E8E8" : "#00D9FF", fontWeight: 600 }}>Monthly</span>
          <label style={{ position: "relative", display: "inline-block", width: "60px", height: "30px" }}>
            <input
              type="checkbox"
              checked={isAnnual}
              onChange={(e) => setIsAnnual(e.target.checked)}
              style={{ opacity: 0, width: 0, height: 0 }}
            />
            <span style={{
              position: "absolute",
              cursor: "pointer",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: isAnnual ? "#00D9FF" : "#2A2A3E",
              borderRadius: "30px",
              transition: "0.3s",
            }}>
              <span style={{
                position: "absolute",
                content: '""',
                height: "22px",
                width: "22px",
                left: "4px",
                bottom: "4px",
                backgroundColor: "#ffffff",
                borderRadius: "50%",
                transition: "0.3s",
                transform: isAnnual ? "translateX(30px)" : "translateX(0)",
              }}></span>
            </span>
          </label>
          <span style={{ color: isAnnual ? "#00D9FF" : "#E8E8E8", fontWeight: 600 }}>
            Annual
            {isAnnual && <span style={{ marginLeft: "8px", color: "#006494", fontSize: "12px" }}>SAVE 20%</span>}
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", marginBottom: "48px" }}>
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{
                background: "rgba(42, 42, 62, 0.5)",
                border: plan.popular ? "2px solid #00D9FF" : "1px solid rgba(0, 217, 255, 0.2)",
                borderRadius: "12px",
                padding: "40px 32px",
                position: "relative",
                transform: plan.popular ? "scale(1.02)" : "scale(1)",
                transition: "all 0.3s",
              }}
            >
              {plan.popular && (
                <div style={{
                  position: "absolute",
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#00D9FF",
                  color: "#000000",
                  padding: "4px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 700,
                }}>
                  MOST POPULAR
                </div>
              )}
              <h3 style={{ fontSize: "28px", marginBottom: "16px" }}>{plan.name}</h3>
              {plan.custom ? (
                <div style={{ fontSize: "32px", fontWeight: 800, color: "#00D9FF", marginBottom: "8px" }}>
                  Custom Pricing
                </div>
              ) : (
                <>
                  <div style={{ fontSize: "48px", fontWeight: 800, color: "#00D9FF", marginBottom: "8px" }}>
                    ₹{isAnnual ? plan.annualPrice.toLocaleString() : plan.monthlyPrice.toLocaleString()}
                  </div>
                  <div style={{ fontSize: "14px", color: "#E8E8E8", marginBottom: "32px" }}>
                    per {isAnnual ? "year" : "month"}
                  </div>
                </>
              )}
              <ul style={{ listStyle: "none", marginBottom: "32px" }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px", fontSize: "14px" }}>
                    <FaCheck style={{ color: "#00D9FF", flexShrink: 0, marginTop: "4px" }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.custom ? "btn-secondary" : "btn-primary"}`} style={{ width: "100%" }}>
                {plan.custom ? "Contact Sales" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "24px" }}>
            <button style={{
              background: "transparent",
              border: "1px solid rgba(0, 217, 255, 0.3)",
              color: "#00D9FF",
              padding: "8px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "14px",
            }}>
              See full feature comparison
            </button>
          </div>
          <div style={{
            display: "inline-block",
            background: "rgba(0, 217, 255, 0.1)",
            border: "1px solid rgba(0, 217, 255, 0.3)",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "14px",
            color: "#00D9FF",
          }}>
            30-day money-back guarantee
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;




