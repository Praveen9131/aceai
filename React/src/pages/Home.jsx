import Hero from "../sections/Hero";
import Training from "../sections/Training";
import CampusConnectPreview from "../sections/CampusConnectPreview";
import AgenticAI from "../sections/AgenticAI";
import Testimonials from "../sections/Testimonials";
import CTABanner from "../sections/CTABanner";
import Footer from "../sections/Footer";
import BusinessEnablement from "../sections/BusinessEnablement";

function Home() {
  return (
    <>
      <Hero />
      <BusinessEnablement />
      <Training />
      <CampusConnectPreview />
      <AgenticAI />
      <Testimonials />
      <CTABanner />
      <Footer />
    </>
  );
}

export default Home;


