import LandingSection from "./sections/landing/Landing";
import ServiceSection from "./sections/services/Service";
import AboutSection from "./sections/about/About";
import PitchSection from "./sections/pitch/Pitch";
import TestimonialsSection from "./sections/testimonials/Testimonials";
import ContactSection from "./sections/contact/Contact";

import "./styles/reset.css";
import "./styles/style.css";

function App() {
  return (
    <>
      <LandingSection />
      <ServiceSection />
      <PitchSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

export default App;

// Everything should fit 1200px width.

// check and disable mobile horizontal overflows

// SEO stuff, check tags, reduce <div> if necessary.

// Ioan different pic
