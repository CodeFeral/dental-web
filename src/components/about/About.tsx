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
            imageOrange="../../../public/stats/medal-orange.svg"
            imageBlue="../../../public/stats/medal-blue.svg"
            imageAlt="medals"
            value="3k +"
            info="Successful Treatments"
          />
          <Stat
            imageOrange="../../../public/stats/heart-orange.svg"
            imageBlue="../../../public/stats/heart-blue.svg"
            imageAlt="hearts"
            value="100%"
            info="Affordable and Satisfactory"
          />
          <Stat
            imageOrange="../../../public/stats/layer-orange.svg"
            imageBlue="../../../public/stats/layer-blue.svg"
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
