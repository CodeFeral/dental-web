import { Show } from "solid-js";
import styles from "./ContactRow.module.css";

interface ContactRowProps {
  title: string;
  image: string;
  description: string;
  href?: string;
}

export default function ContactRow(props: ContactRowProps) {
  return (
    <div class={styles.container}>
      <img class={`${styles.image} disable-selection`} src={props.image} />

      <div class={styles.content}>
        <p class={`${styles.title} disable-selection`}>{props.title}</p>

        <Show
          when={props.href}
          fallback={<p class={styles.description}>{props.description}</p>}
        >
          <a class={styles.link} href={props.href} target="_blank">
            <p class={styles.description}>{props.description}</p>
          </a>
        </Show>
      </div>
    </div>
  );
}
