import Contact from "./components/contact/Contact";
import Form from "./components/form/Form";
import ReviewGroup from "./components/reviews/ReviewGroup";
import PitchGroup from "./components/pitch/PitchGroup";
import ServiceGroup from "./components/services/ServiceGroup";

import "./styles/reset.css";
import "./styles/style.css";

// TODO: the cool tooth idea
// I think the reveal canvas stuff
// Otherwise have to go the long way
//
// XP: 5 years
// clients: 3k

function App() {
  return (
    <>
      <Contact />
      <Form />
      <ReviewGroup />
      <PitchGroup />
      <ServiceGroup />
    </>
  );
}

export default App;
