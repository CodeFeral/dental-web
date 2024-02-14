import styles from "./ContactRow.module.css";

interface ContactRowProps {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  emergency?: boolean;
}

export default function ContactRow(props: ContactRowProps) {
  return (
    <div class={styles.container}>
      <img
        class={`${styles.image} disable-selection`}
        src={props.image}
        alt={props.imageAlt}
      />
      <div class={styles.content}>
        <p class={`${styles.title} disable-selection`}>{props.title}</p>
        <p class={`${styles.description} ${props.emergency && styles.emergencyColor}`} >
          {props.description}
        </p>
      </div>
    </div>
  );
}
