import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CampusConnect from "./pages/CampusConnect";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Syllabus from "./pages/Syllabus";
import HeroTest from "./pages/HeroTest";
import PhoneOnly from "./pages/PhoneOnly";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Chatbot />
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/services" element={<Services />} />
          <Route path="/campus-connect" element={<CampusConnect />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/syllabus/:courseSlug" element={<Syllabus />} />
          <Route path="/hero-test" element={<HeroTest />} />
          <Route path="/phone-demo" element={<PhoneOnly />} />
          {/* Catch-all route - redirect to home for unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

