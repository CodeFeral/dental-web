import styles from "./About.module.css";

export default function About() {
  return (
    <div class={styles.container}>
      <div class={styles.visual}>
        <img
          class={styles.image}
          src="../../../public/georgi-transparent.png"
          alt="Dr. Bagdatov"
        />
      </div>

      <div class={styles.info}></div>
    </div>
  );
}
