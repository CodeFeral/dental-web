import styles from "./Switch.module.css";

interface SwitchProps {
  handleClick: () => void;
  checked: boolean;
}

export default function Switch(props: SwitchProps) {
  return (
    <div>
      <label class={styles.switch}>
        <input
          type="checkbox"
          checked={props.checked}
          onclick={() => props.handleClick()}
        />
        <span class={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
}
