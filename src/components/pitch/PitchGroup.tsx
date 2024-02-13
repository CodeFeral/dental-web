import Pitch from "./Pitch";
import styles from "./PitchGroup.module.css";

export default function PitchGroup() {
  return (
    <div class={styles.container}>
      <Pitch
        image="../../../public/pitch/display-teeth-svgrepo-com.svg"
        title="Modern Approach"
        description="Forget old fashioned dentistry – welcome to the future. The Dental by Design experience makes it as seamless and convenient as possible for you. Our unique and high-tech approach not only limits your anxiety level but also gets you same day services and saves you time."
      />
      <Pitch
        image="../../../public/pitch/tooth-green-svgrepo-com.svg"
        title="Anxiety Free"
        description="At my clinic, I try to do my best to make you feel comfortable and at ease. From our spa like feel to our professional individualized services, our intent is to change the way you approach dentistry. Relax unwind and make sure to enjoy every step of your experience."
      />
      <Pitch
        image="../../../public/pitch/doctor.svg"
        title="Individualization"
        description="There is no one-size-fits-all approach to dentistry. Expect perfection and a personalized experience at Dental by Design. Our data collection process is highly detailed and we offer patient education throughout your treatment so you leave feeling more confident about your dental care."
      />
    </div>
  );
}
