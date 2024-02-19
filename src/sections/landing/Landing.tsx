import styles from "./Landing.module.css";

export default function LandingSection() {
  return (
    <section class={styles.section}>
      <div class={styles.content}>
        <div class={styles.group}>
          <div class={styles.welcome}>
            <h1 class="bold">
              Dedicated to
              <br />
              Dental Excellence
            </h1>
            <p>
              Experience dental care designed just for you. Direct, straight to the point medical service.
            </p>
            <button class="button">Contact Us</button>
          </div>
        </div>

        <div class={styles.group}>
          <div class={styles.visual}>
            <img
              class={styles.image}
              src="../../public/tooth.svg"
              alt="tooth"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
