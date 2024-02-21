import styles from "./Footer.module.css";

export default function FooterSection() {
  return (
    <section id="footer-section" class={styles.section}>
      <div class={styles.container}>
        <a
          class={styles.content}
          href="https://www.linkedin.com/in/donitsonchev/"
        >
          Hand-coded by Doni
          <img
            class={styles.image}
            src="../../../public/link-hover.svg"
            alt="link"
          />
        </a>
      </div>
    </section>
  );
}
