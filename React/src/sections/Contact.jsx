import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

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
  const API_URL = process.env.REACT_APP_API_URL || "https://api.aceai.in/api/contact";

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
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      setIsSuccess(false);
      setErrorMessage(
        error.message || "Failed to send message. Please try again or contact us directly."
      );
      setTimeout(() => setErrorMessage(""), 5000);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p style={{ marginBottom: "40px" }}>We're here to help you succeed</p>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div className="contact-details">
                <h4>Address</h4>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  Office No 09, Third Floor, Akshaya HQ,<br />
                  Old Mahabalipuram Road, Tamilnadu,<br />
                  Pin code: 603103
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div className="contact-details">
                <h4>Phone</h4>
                <a href="tel:+919962264760">+91-9962264760</a>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:director@aceai.in">director@aceai.in</a>
              </div>
            </div>

            <div className="contact-item">
              <FaClock className="contact-icon" />
              <div className="contact-details">
                <h4>Business Hours</h4>
                <p>Mon-Fri: 10 AM - 6 PM IST</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/company/aceai-softwares/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin size={32} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter size={32} />
              </a>
              <a href="https://www.instagram.com/aceai_1" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram size={32} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook size={32} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaYoutube size={32} />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {isSuccess && (
              <div className="form-success" style={{ 
                background: "var(--color-primary)", 
                color: "#ffffff", 
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
  );
}

export default Contact;






