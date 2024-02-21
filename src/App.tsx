import LandingSection from "./sections/landing/LandingSection";
import ServiceSection from "./sections/services/ServiceSection";
import QuestionsSection from "./sections/questions/QuestionsSection";
import AboutSection from "./sections/about/AboutSection";
import TestimonialsSection from "./sections/testimonials/TestimonialsSection";
import AfterSection from "./sections/after/AfterSection";
import ContactSection from "./sections/contact/ContactSection";

import "./styles/reset.css";
import "./styles/style.css";

function App() {
  return (
    <>
      <LandingSection />
      <ServiceSection />
      <QuestionsSection />
      <AboutSection />
      <AfterSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

export default App;

// Either better pitch (link), or problems with svgs => solutions

// Curved bezier section separators (like Yuroslav, link)

// Cleanup

// Mobile section spacing

// Check and disable mobile horizontal overflows

// SEO stuff, check tags, reduce <div> if necessary.

// Ioan different pic

// Performance Considerations: For larger components or sections that might
// not be immediately visible, consider using lazy loading to improve initial
// load times. Solid.js supports lazy loading out of the box with lazy from solid-js.
