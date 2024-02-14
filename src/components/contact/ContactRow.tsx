import { Match, Switch } from "solid-js";
import styles from "./ContactRow.module.css";

interface ContactRowProps {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  emergency?: boolean;
  href?: string;
  target?: boolean;
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

        <Switch
          fallback={
            <p class={`${styles.description} ${props.emergency && styles.emergencyColor}`} >
              {props.description}
            </p>
          }
        >
          <Match when={props.href && props.target}>
            <a href={props.href} target="_blank">
              <p class={`${styles.description} ${props.emergency && styles.emergencyColor}`} >
                {props.description}
              </p>
            </a>
          </Match>

          <Match when={props.href}>
            <a href={props.href}>
              <p class={`${styles.description} ${props.emergency && styles.emergencyColor}`} >
                {props.description}
              </p>
            </a>
          </Match>
        </Switch>
      </div>
    </div>
  );
}
