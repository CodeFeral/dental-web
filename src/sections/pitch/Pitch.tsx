import Pitch from "../../components/pitch/Pitch";
import styles from "./Pitch.module.css";

export default function PitchSection() {
  return (
    <section class={styles.section}>
      <div class={styles.container}>
        <Pitch
          image="../../../public/pitch/shield.svg"
          title="Safety"
          description="Your health is my utmost priority. In my practice, I provide a secure and comforting environment, ensuring your safety by the highest standards."
        />
        <Pitch
          image="../../../public/pitch/tooth-green.svg"
          title="Expertise"
          description="With refined skill honed through years of dedicated practice, I ensure every aspect of your dental care is handled by an expert touch."
        />
        <Pitch
          image="../../../public/pitch/display-tooth.svg"
          title="Technology"
          description="Step into the future of dentistry, blending time-honored traditions with cutting-edge technology for effective and efficient treatment."
        />
      </div>
    </section>
  );
}
