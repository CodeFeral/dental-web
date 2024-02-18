import Stat from "../../components/about/Stat";
import styles from "./About.module.css";

export default function AboutSection() {
  return (
    <section class={styles.section}>
      <div class={styles.container}>
        <div class={styles.content}>
          <div class={styles.info}>
            <h2 class={`${styles.narrative} narrative bold`}>
              About Your Dentist...
            </h2>

            <h3 class={`${styles.name} bold`}>Doctor Georgi Bagdatov</h3>

            <div class={styles.description}>
              <p>
                Carrying a family legacy of exceptional dental care, and
                educated at the Medical University of Sofia, Dr. Bagdatov
                strives to blend time-honored techniques with modern dentistry.
              </p>
              <p>
                His approach is patient-first, focusing on personalized,
                comfortable care. Whether it's routine maintenance or complex
                treatments, he's always dedicated to your health.
              </p>
            </div>
          </div>
          <div class={styles.stats}>
            <Stat
              imageOrange="../../../public/stats/medal-orange.svg"
              imageBlue="../../../public/stats/medal-blue.svg"
              imageAlt="medals"
              value="4k+"
              info="Successful Treatments"
            />
            <Stat
              imageOrange="../../../public/stats/heart-orange.svg"
              imageBlue="../../../public/stats/heart-blue.svg"
              imageAlt="hearts"
              value="2k+"
              info="Customers Satisfied"
            />
            <Stat
              imageOrange="../../../public/stats/layer-orange.svg"
              imageBlue="../../../public/stats/layer-blue.svg"
              imageAlt="layers"
              value="5k+"
              info="Hours of Experience"
            />
          </div>
          <button class={`${styles.button} button`}>Contact Me</button>
        </div>
      </div>
    </section>
  );
}
