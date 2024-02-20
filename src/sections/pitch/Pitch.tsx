import Pitch from "../../components/pitch/Pitch";
import styles from "./Pitch.module.css";

export default function PitchSection() {
  return (
    <section class={styles.section}>
      <div class={styles.container}>
        <Pitch
          image="../../../public/pitch/womyn.png"
          title="Safety"
          description="Your health is our utmost priority. In our practice, we provide a secure and comforting environment, ensuring your safety by the highest standards."
        />
        <Pitch
          image="../../../public/pitch/veneers.png"
          title="Expertise"
          description="With refined skill honed through years of dedicated practice, we ensure every aspect of your dental care is handled by an expert touch."
        />
        <Pitch
          image="../../../public/pitch/tech.png"
          title="Technology"
          description="Step into the future of dentistry, blending time-honored traditions with cutting-edge technology for effective and efficient treatment."
        />
      </div>
    </section>
  );
}
