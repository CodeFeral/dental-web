import LandingSection from "./sections/landing/LandingSection";
import ServiceSection from "./sections/services/ServiceSection";
import AboutSection from "./sections/about/AboutSection";
import TestimonialsSection from "./sections/testimonials/TestimonialsSection";
import ContactSection from "./sections/contact/ContactSection";
import QuestionsSection from "./sections/questions/QuestionsSection";

import "./styles/reset.css";
import "./styles/style.css";

function App() {
  return (
    <>
      <LandingSection />
      <ServiceSection />
      <AboutSection />
      <QuestionsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

export default App;

// Cleanup

// Check and disable mobile horizontal overflows

// SEO stuff, check tags, reduce <div> if necessary.

// Ioan different pic
