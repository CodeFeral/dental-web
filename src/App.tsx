import AboutSection from "./sections/about/About";
import LandingSection from "./sections/landing/Landing";
import PitchSection from "./sections/pitch/Pitch";
import ServiceSection from "./sections/services/Service";

import "./styles/reset.css";
import "./styles/style.css";

function App() {
  return (
    <>
      <LandingSection />
      <PitchSection />
      <AboutSection />
      <ServiceSection />
    </>
  );
}

export default App;

// SEO stuff, check tags, reduce <div> if necessary.

// Everything should fit 1200px width.

// check and disable mobile horizontal overflows

// TODO: the cool tooth idea
// I think the reveal canvas stuff.
// Otherwise have to go the long way.

// Make the pitch perfect as well.
// Thinking 4 big squares, how the
// services used to be.
// Narrator can call them pillars
// of dentistry. If so, consider
// replacing "Anxiety" with "Skill".

// White space, kinda avoid borders.
// Use the whole screen.
//
// Services still media, but not 800px.
// No need, just on very large screens,
// so at like @1000 or @1200, and copy
// https://swishoralcare.ca/ and
// https://thegleamery.com/
// card sizing
