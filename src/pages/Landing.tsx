import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <section class={styles.container}>
      <div class={styles.content}>
        <div class={styles.group}>
          <div class={styles.welcome}>
            <h1 class="bold">Dedicated to<br/>Dental Excellence</h1>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint.
            </p>
            <button class="button">Book Now</button>
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
