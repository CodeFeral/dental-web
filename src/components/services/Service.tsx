import styles from "./Service.module.css";

interface ServiceProps {
  image: string;
  title: string;
  description: string;
}

export default function Service(props: ServiceProps) {
  return (
    <div class={styles.container}>
      <img class={styles.image} src={props.image} alt={props.title} />

      <div class={styles.content}>
        <h2 class={`${styles.title} bold`}>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
