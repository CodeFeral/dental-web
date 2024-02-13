import styles from "./Service.module.css";

interface ServiceProps {
  image: string;
  title: string;
  description: string;
}

export default function Service(props: ServiceProps) {
  return (
    <div class={styles.container}>
      <div class={styles.content}>
        <img class={styles.image} src={props.image} alt={props.title} />

        <h2 class={styles.title}>{props.title}</h2>

        <p class={styles.description}>{props.description}</p>
      </div>
    </div>
  );
}
