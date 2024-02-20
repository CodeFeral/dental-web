import styles from "./Service.module.css";

interface ServiceProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export default function Service(props: ServiceProps) {
  return (
    <div class={styles.container}>
      <img class={styles.image} src={props.image} alt={props.title} />

      <div class={styles.content}>
        <div>
          <h2 class={`${styles.title} bold`}>{props.title}</h2>
          <p class={styles.description}>{props.description}</p>
        </div>
        <a class={styles.more} href="#contact-section">
          <p>More info</p>
          <img src="../../../public/arrow.svg" />
        </a>
      </div>
    </div>
  );
}
