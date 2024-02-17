import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <section class={styles.container}>
      <div class={styles.content}>
        <div class={styles.welcome}>
          <h1>Welcome!</h1>
          <h2>Top kek!</h2>
        </div>
        <div class={styles.visual}></div>
      </div>
    </section>
  );
}
