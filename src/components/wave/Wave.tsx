import styles from "./Wave.module.css";

interface WaveProps {
  top: boolean;
  maxHeight?: string;
}

export default function Wave(props: WaveProps) {
  return (
    <div
      style={props.maxHeight && { "max-height": props.maxHeight }}
      class={styles.content}
    >
      <img
        class={styles.image}
        src={`../../../public/waves/${props.top ? "top" : "bot"}.svg`}
      />
    </div>
  );
}
