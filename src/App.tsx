import Navigation from "./components/navigation/Navigation";
import LandingSection from "./sections/landing/LandingSection";
import ServiceSection from "./sections/services/ServiceSection";
import QuestionsSection from "./sections/questions/QuestionsSection";
import SolutionsSection from "./sections/solutions/Solutions";
import TestimonialsSection from "./sections/testimonials/TestimonialsSection";
import AboutSection from "./sections/about/AboutSection";
import ContactSection from "./sections/contact/ContactSection";
import FooterSection from "./sections/footer/Footer";

import "./styles/reset.css";
import "./styles/style.css";

function App() {
  return (
    <>
      <Navigation />
      <LandingSection />
      <ServiceSection />
      <QuestionsSection />
      <AboutSection />
      <SolutionsSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;

// Landing 100vh?
//
// Reveal toggle instead of button
//
// Landing Animation
//
// Cleanup
//
// Spacing patch (Mobile too)
//
// Check and disable mobile horizontal overflows
//
// SEO stuff, check tags, reduce <div> if necessary.
//
// Ioan different pic
//
// Performance Considerations: For larger components or sections that might
// not be immediately visible, consider using lazy loading to improve initial
// load times. Solid.js supports lazy loading out of the box with lazy from solid-js.
