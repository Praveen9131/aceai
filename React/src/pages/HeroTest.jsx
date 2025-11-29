import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import LandingHero from "../components/LandingHero";
import PhoneVideoDemo from "../components/PhoneVideoDemo";
import { useEffect } from "react";

export default function HeroTest() {
  useEffect(() => {
    document.title = "Hero Test - AceAI Technology";
    return () => {
      document.title = "AceAI Technology - AI Solutions, Training & Development";
    };
  }, []);

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      <Navbar />
      <LandingHero />
      <PhoneVideoDemo />
      <Footer />
    </div>
  );
}


