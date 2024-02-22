import styles from "./LandingSection.module.css";

export default function LandingSection() {
  return (
    <section id="landing-section" class={styles.section}>
      <div class={styles.content}>
        <div class={styles.group}>
          <div class={styles.welcome}>
            <h1 class="bold">
              Dedicated to
              <br />
              Dental Excellence
            </h1>
            <p>
              Experience dental care designed just for you. Direct, straight to
              the point medical service.
            </p>
            <a class={`${styles.button} button`} href="#contact-section">
              Contact Us
            </a>
          </div>
        </div>

        <div class={styles.group}>
          <div class={styles.visual}>
            <img class={styles.image} src="../../../public/logo.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
