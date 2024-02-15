import { Show, createSignal } from "solid-js";
import styles from "./ContactRow.module.css";

interface ContactRowProps {
  title: string;
  image: string;
  imageAlert?: string;
  imageAlt: string;
  description: string;
  emergency?: boolean;
  href?: string;
  target?: boolean;
}

export default function ContactRow(props: ContactRowProps) {
  const [hover, setHover] = createSignal(false);

  const imgSrc = () => props.emergency && props.href && hover() ? props.imageAlert : props.image;
  const linkTarget = props.target ? "_blank" : undefined;

  return (
    <div class={styles.container}>
      <img
        class={`${styles.image} disable-selection`}
        src={imgSrc()}
        alt={props.imageAlt}
      />

      <div class={styles.content}>
        <p class={`${styles.title} disable-selection`}>{props.title}</p>

        <Show
          fallback={
            <p
              classList={{
                [styles.description]: true,
                [styles.emergencyColor]: props.emergency,
              }}
            >
              {props.description}
            </p>
          }
          when={props.href}
        >
          <a
            href={props.href}
            onmouseenter={() => setHover(true)}
            onmouseleave={() => setHover(false)}
            target={linkTarget}
          >
            <p
              classList={{
                [styles.description]: true,
                [styles.emergencyColor]: props.emergency,
                [styles.hover]: hover(),
              }}
            >
              {props.description}
            </p>
          </a>
        </Show>
      </div>
    </div>
  );
}
