import Narrative from "../../components/narrative/Narrative";
import Stat from "../../components/stats/Stat";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about-section" class={styles.section}>
      <div class={styles.container}>
        <Narrative
          title="Your Dentist"
          heading="Meet Dr. Bagdatov"
          description="Carrying a family legacy of exceptional dental care, and
                educated at the Medical University of Sofia, he blends time-honored techniques with modern dentistry."
        />

        <div class={styles.content}>
          <div class={styles.image}>
            <img
              src="../../../public/georgi-transparent.png"
              alt="Dr. Georgi Bagdatov"
            />
          </div>

          <div class={styles.info}>
            <p class={styles.quote}>
              "My approach prioritizes the patient, focusing on personalized,
              comfortable care. Whether it's routine maintenance or complex
              treatments, I'm always committed to your health and well-being."
            </p>

            <div class={styles.stats}>
              <Stat
                image="../../../public/stats/medal.svg"
                imageAlt="medals"
                value="4k+"
                info="Treatments"
              />
              <Stat
                image="../../../public/stats/heart.svg"
                imageAlt="hearts"
                value="3k+"
                info="Customers"
              />
              <Stat
                image="../../../public/stats/layer.svg"
                imageAlt="layers"
                value="7k+"
                info="Work Hours"
              />
            </div>

            <a class={`${styles.button} button`} href="#contact-section">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
