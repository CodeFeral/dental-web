import styles from "./Wave.module.css";

interface WaveProps {
  blue: boolean;
  top: boolean;
}

export default function Wave(props: WaveProps) {
  return (
    <div class={styles.content}>
      <img
        class={styles.image}
        src={`../../../public/waves/${props.top ? "top" : "bot"}-${props.blue ? "1" : "2"}.svg`}
      />
    </div>
  );
}
