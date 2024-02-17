import styles from "./Pitch.module.css";

interface PitchProps {
  image: string;
  title: string;
  description: string;
}

export default function Pitch(props: PitchProps) {
  return (
    <div class={styles.container}>
      <div class={styles.content}>
        <div class={styles["image-container"]}>
          <img class={styles.image} src={props.image} alt={props.title} />
        </div>

        <div class={styles.info}>
          <h2 class={`${styles.title} bold`}>{props.title}</h2>

          <p class={styles.description}>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
