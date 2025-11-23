import { useState } from "react";
import logoImg from "../assets/logowhite.png";
import Signin from "./Signin.jsx";
import Signup from "./SignUp.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const closeModals = () => {
    setShowSignin(false);
    setShowSignup(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center z-40">
            <img src={logoImg} alt="Aceai Logo" className="h-10 w-10" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden z-40 transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="relative group">
                <button
                  className={`text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {user.name || "Profile"}
                </button>
                <div className="absolute hidden group-hover:block right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <div className="px-4 py-2 border-b border-gray-200 text-sm text-gray-600">
                    {user.email}
                  </div>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setShowSignin(true);
                  setShowSignup(false);
                }}
                className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  !scrolled && "backdrop-blur-sm bg-white/10 border border-white/30"
                }`}
              >
                Get Started
              </button>
            )}
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
          <nav
            className={`fixed lg:hidden top-0 left-0 w-64 h-full bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } z-40 shadow-lg`}
          >
            <div className="flex flex-col mt-20 px-6 space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-left text-base font-medium text-gray-700 hover:text-blue-600"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Contact
              </button>
              {!user && (
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <button
                    onClick={() => {
                      setShowSignin(true);
                      setIsOpen(false);
                    }}
                    className="w-full text-left text-gray-700 hover:text-blue-600 text-base font-medium"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setShowSignup(true);
                      setIsOpen(false);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-base font-medium"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Signin and Signup modals */}
      {showSignin && (
        <Signin
          onClose={closeModals}
          onSwitchToSignup={() => {
            setShowSignin(false);
            setShowSignup(true);
          }}
        />
      )}
      {showSignup && (
        <Signup
          onClose={closeModals}
          onSwitchToSignin={() => {
            setShowSignup(false);
            setShowSignin(true);
          }}
        />
      )}
    </>
  );
}

export default Navbar;
