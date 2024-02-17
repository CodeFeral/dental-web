import { createSignal } from "solid-js";
import styles from "./Stat.module.css";

interface StatProps {
  imageOrange: string;
  imageBlue: string;
  imageAlt: string;
  value: string;
  info: string;
}

export default function Stat(props: StatProps) {
  const [toggle, setToggle] = createSignal(true);

  return (
    <div class={styles.container}>
      <div
        class={styles.group}
        onmouseenter={() => setToggle(false)}
        onmouseleave={() => setToggle(true)}
      >
        <img
          class={styles.image}
          src={toggle() ? props.imageBlue : props.imageOrange}
          alt={props.imageAlt}
        />
        <p class={`${styles.value} bold`}>{props.value}</p>
      </div>

      <p class={styles.info}>{props.info}</p>
    </div>
  );
}
