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

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const isWhitePage = false; // keep navbar orange everywhere

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-content">
        <Link to="/" className="navbar-logo" style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "0" }}>
          <img src={logoImg} alt="Aceai Technologies" />
          <span className="navbar-logo-text">ACEAI Technologies</span>
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-nav ${isOpen ? "navbar-nav-open" : ""}`} style={{ margin: "0 auto" }}>
          <Link to="/" onClick={() => setIsOpen(false)} className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className={location.pathname === "/services" ? "active" : ""}>Services</Link>
          <Link to="/campus-connect" onClick={() => setIsOpen(false)} className={location.pathname === "/campus-connect" ? "active" : ""}>Campus Connect</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={location.pathname === "/about" ? "active" : ""}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

