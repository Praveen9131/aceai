import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import contactImage from "../assets/contact-image.png";
import contactHero from "../assets/contact-hero.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    source: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  // API Configuration
  const API_URL = process.env.REACT_APP_API_URL || "https://api.aceai.in/api/contact"; // Replace with your actual API URL

  useEffect(() => {
    document.title = "Contact Us - AceAI Technology";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }
    if (!formData.source) {
      newErrors.source = "Please select how you heard about us";
    }
    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setIsSuccess(false);

    try {
      // Prepare data for API
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        company: formData.company.trim() || null,
        service: formData.service,
        source: formData.source,
        message: formData.message.trim(),
        timestamp: new Date().toISOString(),
      };

      // Make API call
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Server error: ${response.status}`);
      }

      // Success
      setIsSubmitting(false);
      setIsSuccess(true);
      setErrorMessage("");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        source: "",
        message: "",
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      setIsSuccess(false);
      setErrorMessage(
        error.message || "Failed to send message. Please try again or contact us directly."
      );
      
      // Hide error message after 5 seconds
      setTimeout(() => setErrorMessage(""), 5000);
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ 
        position: "relative", 
        width: "100%", 
        minHeight: "clamp(300px, 50vw, 500px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        marginTop: "clamp(64px, 10vw, 70px)",
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}>
          <img
            src={contactHero}
            alt="Contact Hero"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.7)",
            }}
          />
        </div>
        <div style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "#ffffff",
          padding: "clamp(40px, 8vw, 80px) clamp(16px, 4vw, 24px)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          <h1 style={{ 
            fontSize: "clamp(28px, 7vw, 72px)", 
            fontWeight: 800, 
            color: "#ffffff", 
            marginBottom: "clamp(16px, 3vw, 24px)",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
            lineHeight: 1.2,
          }}>
            Get In Touch
          </h1>
          <p style={{ 
            fontSize: "clamp(14px, 2.5vw, 24px)", 
            color: "#ffffff", 
            maxWidth: "800px", 
            margin: "0 auto",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            lineHeight: 1.6,
            fontWeight: 400,
          }}>
            Reach out to us with any queries you have, knowing we're dedicated to your success and growth.
          </p>
        </div>
      </section>

      <section id="contact" className="section" style={{ background: "#ffffff", padding: "clamp(40px, 8vw, 80px) clamp(16px, 5vw, 64px)" }}>
        <div className="container">

          <div className="contact-form-grid" style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))", 
            gap: "clamp(24px, 4vw, 48px)", 
            alignItems: "start",
          }}>
            {/* Left Side - Image */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(255, 108, 12, 0.15)",
              border: "2px solid rgba(255, 108, 12, 0.1)",
            }}>
              <img
                src={contactImage}
                alt="Contact Us"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Right Side - Form */}
            <form className="contact-form" onSubmit={handleSubmit} style={{ background: "#FFF5F2", border: "1px solid rgba(255, 108, 12, 0.2)" }}>
              {isSuccess && (
                <div className="form-success" style={{ 
                  background: "var(--color-primary)", 
                  color: "#ffffff", 
                  border: "none",
                  padding: "16px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  textAlign: "center",
                  fontWeight: 600,
                }}>
                  ✅ Thank you! We'll respond within 24 hours.
                </div>
              )}
              
              {errorMessage && (
                <div className="form-error" style={{ 
                  background: "#FEE2E2", 
                  color: "#DC2626", 
                  border: "1px solid #FCA5A5",
                  padding: "16px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  textAlign: "center",
                  fontWeight: 500,
                }}>
                  ❌ {errorMessage}
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your full name"
                  required
                />
                {errors.name && <div className="form-error">{errors.name}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your company name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Service Interested In *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="ai-solutions">AI Solutions</option>
                  <option value="training">Training</option>
                  <option value="web-development">Web Development</option>
                  <option value="campus-connect">Campus Connect</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && <div className="form-error">{errors.service}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">How did you hear about us? *</label>
                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="google">Google Search</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="other">Other</option>
                </select>
                {errors.source && <div className="form-error">{errors.source}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell us about your project or inquiry..."
                  required
                ></textarea>
                {errors.message && <div className="form-error">{errors.message}</div>}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ width: "100%" }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;




