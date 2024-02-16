import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Form from "./components/form/Form";
import Map from "./components/map/Map";
import ReviewGroup from "./components/reviews/ReviewGroup";
import PitchGroup from "./components/pitch/PitchGroup";
import ServiceGroup from "./components/services/ServiceGroup";

import "./styles/reset.css";
import "./styles/style.css";

// SEO stuff, check tags, reduce <div> if necessary.

// TODO: the cool tooth idea
// I think the reveal canvas stuff.
// Otherwise have to go the long way.

// Make the pitch perfect as well.
// Thinking 4 big squares, how the
// services used to be.
// Narrator can call them pillars
// of dentistry. If so, consider
// replacing "Anxiety" with "Skill".

function App() {
  return (
    <>
      <ServiceGroup />
      <PitchGroup />
      <ReviewGroup />
      <Contact />
      <Form />
      <Map />
      <About />
    </>
  );
}

export default App;
