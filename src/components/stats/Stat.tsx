import styles from "./Stat.module.css";

interface StatProps {
  image: string;
  imageAlt: string;
  value: string;
  info: string;
}

export default function Stat(props: StatProps) {
  return (
    <div class={styles.container}>
      <div class={styles.group}>
        <img class={styles.image} src={props.image} alt={props.imageAlt} />
        <p class={`${styles.value} bold`}>{props.value}</p>
      </div>

      <p class={styles.info}>{props.info}</p>
    </div>
  );
}
