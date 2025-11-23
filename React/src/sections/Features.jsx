import { FaRocket, FaBrain, FaUsers, FaAward, FaCog } from "react-icons/fa";

const features = [
  { icon: <FaRocket />, number: "01", title: "Fast Delivery", description: "We deliver projects on time without compromising quality." },
  { icon: <FaBrain />, number: "02", title: "AI-Powered Solutions", description: "Leverage cutting-edge AI technology to automate processes." },
  { icon: <FaUsers />, number: "03", title: "Expert Team", description: "Work with experienced developers, designers, and AI specialists." },
  { icon: <FaAward />, number: "04", title: "Custom Designs", description: "Every project is tailored to your brand identity and goals." },
  { icon: <FaCog />, number: "05", title: "Ongoing Support", description: "Continuous support and maintenance to ensure optimal performance." },
];

function Features() {
  return (
    <section id="features" className="section features-section">
      <div className="container">
        <h2 className="section-title">Why Choose Aceai</h2>
        <p className="section-subtitle">
          Experience the difference with our comprehensive approach
        </p>
        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className={`feature-item ${index % 2 === 0 ? "feature-left" : "feature-right"}`}>
              <div className="feature-icon-wrapper">
                <span className="feature-number">{feature.number}</span>
                <div className="feature-icon">{feature.icon}</div>
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;






