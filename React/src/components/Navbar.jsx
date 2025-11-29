import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logowhite.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);


  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-content">
        <Link to="/" className="navbar-logo" style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "0" }}>
          <img src={logoImg} alt="AceAI Technology" />
          <span className="navbar-logo-text">AceAI Technology</span>
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          style={{
            display: "none", // Will be shown via CSS on mobile
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            zIndex: 1001,
          }}
        >
          <span style={{
            width: "24px",
            height: "2px",
            background: "#ffffff",
            transition: "all 0.3s ease",
            transform: isOpen ? "rotate(45deg) translateY(7px)" : "none",
            transformOrigin: "center",
          }}></span>
          <span style={{
            width: "24px",
            height: "2px",
            background: "#ffffff",
            transition: "all 0.3s ease",
            opacity: isOpen ? 0 : 1,
          }}></span>
          <span style={{
            width: "24px",
            height: "2px",
            background: "#ffffff",
            transition: "all 0.3s ease",
            transform: isOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            transformOrigin: "center",
          }}></span>
        </button>

        <div className={`navbar-nav ${isOpen ? "navbar-nav-open" : ""}`} style={{ margin: "0 auto" }}>
          <Link to="/" onClick={() => setIsOpen(false)} className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className={location.pathname === "/services" ? "active" : ""}>Services</Link>
          <Link to="/campus-connect" onClick={() => setIsOpen(false)} className={location.pathname === "/campus-connect" ? "active" : ""}>Campus Connect</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={location.pathname === "/about" ? "active" : ""}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
        </div>
        
        {/* Mobile menu overlay */}
        {isOpen && (
          <div 
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: 998,
              display: "none", // Will be shown via media query
            }}
            className="navbar-overlay"
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;

