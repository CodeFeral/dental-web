import styles from "./About.module.css";
import Stat from "./Stat";

export default function About() {
  return (
    <div class={styles.container}>
      <h2 class={`${styles["about-heading-portrait"]} narrative`}>
        {" "}
        About Your Dentist...{" "}
      </h2>
      <img
        class={styles.portrait}
        src="../../../public/georgi-transparent.png"
        alt="Dr. Bagdatov"
      />

      <div class={styles.about}>
        <h2 class={`${styles["about-heading-info"]} narrative`}>
          {" "}
          About Your Dentist...{" "}
        </h2>
        <div class={styles.info}>
          <h3 class={styles.name}>Doctor Georgi Bagdatov</h3>
          <p>
            Welcome, my name is Georgi Bagdatov, and I carry a family legacy of
            exceptional dental care. Educated at the Medical University of
            Sofia, I strive to blend time-honored techniques with modern
            dentistry.
          </p>
          <p>
            My approach is patient-first, focusing on personalized, comfortable
            care. Whether it's routine maintenance or complex treatments, I'm
            dedicated to your health.
          </p>
        </div>

        <div class={styles.stats}>
          <div class={styles["stats-group"]}>
            <Stat
              imageOrange="../../../public/stats/medal-orange.svg"
              imageBlue="../../../public/stats/medal-blue.svg"
              imageAlt="medals"
              value="4k+"
              info="Treatments"
            />
            <Stat
              imageOrange="../../../public/stats/heart-orange.svg"
              imageBlue="../../../public/stats/heart-blue.svg"
              imageAlt="hearts"
              value="10/10"
              info="Satisfaction"
            />
          </div>
          <div class={styles["stats-group"]}>
            <Stat
              imageOrange="../../../public/stats/layer-orange.svg"
              imageBlue="../../../public/stats/layer-blue.svg"
              imageAlt="layers"
              value="7k+"
              info="Work Hours"
            />
            <Stat
              imageOrange="../../../public/stats/wallet-orange.svg"
              imageBlue="../../../public/stats/wallet-blue.svg"
              imageAlt="wallet"
              value="100%"
              info="Affordable"
            />
          </div>
        </div>

        <button class={`${styles.button} button`}>Contact Me</button>
      </div>
    </div>
  );
}
