import { useState } from "react";

function CTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email subscription:", email);
    setEmail("");
  };

  return (
    <section className="section cta-section">
      <div className="container">
        <h2>Ready to Transform Your Digital Presence?</h2>
        <p>
          Let's work together to create something amazing. Get started today and
          take your business to the next level.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn btn-primary">Start Your Project</a>
          <a href="#contact" className="btn btn-secondary">Schedule Consultation</a>
        </div>
        <form onSubmit={handleSubmit} className="cta-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default CTA;






