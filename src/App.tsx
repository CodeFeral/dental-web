import Navigation from "./components/navigation/Navigation";
import LandingSection from "./sections/landing/LandingSection";
import ServiceSection from "./sections/services/ServiceSection";
import QuestionsSection from "./sections/questions/QuestionsSection";
import AboutSection from "./sections/about/AboutSection";
import SolutionsSection from "./sections/solutions/Solutions";
import TestimonialsSection from "./sections/testimonials/TestimonialsSection";
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
