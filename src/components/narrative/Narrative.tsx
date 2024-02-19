import styles from "./Narrative.module.css";

interface NarrativeProps {
  title: string;
  heading: string;
  description: string;
}

export default function Narrative(props: NarrativeProps) {
  return (
    <div class={styles.content}>
      <h2 class={`${styles.title} bold`}>{props.title}</h2>
      <h2 class={`${styles.heading} bold`}>{props.heading}</h2>
      <p class={styles.description}>{props.description}</p>
    </div>
  );
}
