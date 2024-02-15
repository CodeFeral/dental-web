import styles from "./About.module.css";
import Stat from "./Stat";

export default function About() {
  return (
    <div class={styles.container}>
      <div class={styles.about}>
        <h2 class={styles.heading}>About Your Dentist</h2>

        <p class={styles.info}>
          I'm Dr. Bagdatov, carrying on a family legacy of exceptional dental
          care. Educated at the Medical University of Sofia, I blend
          time-honored techniques with modern dentistry. My approach is
          patient-first, focusing on personalized, comfortable care. Whether
          it's routine maintenance or complex treatments, I'm dedicated to your
          dental health.
        </p>

        <div class={styles.stats}>
          <Stat
            image="../../../public/stats/medal.svg"
            imageAlt="medals"
            value="3k +"
            info="Successful Treatments"
          />
          <Stat
            image="../../../public/stats/heart.svg"
            imageAlt="hearts"
            value="100%"
            info="Affordable and Satisfactory"
          />
          <Stat
            image="../../../public/stats/layer.svg"
            imageAlt="layers"
            value="5 +"
            info="Years of Experience"
          />
        </div>
      </div>

      <img
        class={styles.portrait}
        src="../../../public/georgi-transparent.png"
        alt="Dr. Bagdatov"
      />
    </div>
  );
}
