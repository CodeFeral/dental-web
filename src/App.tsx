import LandingSection from "./sections/landing/LandingSection";
import ServiceSection from "./sections/services/ServiceSection";
import AboutSection from "./sections/about/AboutSection";
import TestimonialsSection from "./sections/testimonials/TestimonialsSection";
import ContactSection from "./sections/contact/ContactSection";

import "./styles/reset.css";
import "./styles/style.css";

function App() {
  return (
    <>
      <LandingSection />
      <ServiceSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

export default App;

// FAQ

// Everything should fit 1200px width.

// check and disable mobile horizontal overflows

// SEO stuff, check tags, reduce <div> if necessary.

// Ioan different pic
