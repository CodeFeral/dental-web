import Narrative from "../../components/narrative/Narrative";
import Stat from "../../components/stats/Stat";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about-section" class={styles.section}>
      <div class={styles.container}>
        <div class={styles.content}>
          <Narrative
            title="Your Dentist"
            heading="Meet Dr. Bagdatov"
            description="Carrying a family legacy of exceptional dental care, and
                educated at the Medical University of Sofia, Doctor Georgi Bagdatov
                strives to blend time-honored techniques with modern dentistry."
          />

          <div class={styles.image}>
            <img src="../../../public/georgi-transparent.png" alt="Dr. Georgi Bagdatov" />
          </div>

          <p class={styles.quote}>
            "My approach prioritizes the patient, focusing on personalized,
            comfortable care. Whether it's routine maintenance or complex
            treatments, I'm always committed to your health and well-being."
          </p>

          <div class={styles.stats}>
            <Stat
              image="../../../public/stats/medal-blue.svg"
              imageAlt="medals"
              value="4k+"
              info="Successful Treatments"
            />
            <Stat
              image="../../../public/stats/heart-blue.svg"
              imageAlt="hearts"
              value="3k+"
              info="Customers Satisfied"
            />
            <Stat
              image="../../../public/stats/layer-blue.svg"
              imageAlt="layers"
              value="7k+"
              info="Hours of Experience"
            />
          </div>

          <button class={`${styles.button} button`}>Contact Me</button>
        </div>
      </div>
    </section>
  );
}
