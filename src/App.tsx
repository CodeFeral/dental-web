import PitchGroup from "./components/pitch/PitchGroup";
import ReviewGroup from "./components/reviews/ReviewGroup";
import ServiceGroup from "./components/services/ServiceGroup";

import "./styles/reset.css";
import "./styles/style.css";

// TODO: the cool tooth idea
// I think the reveal canvas stuff
// Otherwise have to go the long way

function App() {
  return (
    <>
      <ReviewGroup />
      <PitchGroup />
      <ServiceGroup />
    </>
  );
}

export default App;
