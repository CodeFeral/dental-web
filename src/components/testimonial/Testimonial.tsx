import { Show, createSignal } from "solid-js";
import styles from "./Testimonial.module.css";

interface ReviewProps {
  picture: string;
  name: string;
  review: string;
  link?: string;
}

export default function Testimonial(props: ReviewProps) {
  const [linkHover, setLinkHover] = createSignal(false);

  return (
    <>
      <div class={styles.container}>
        <div class={styles.content}>
          <div class={styles.picture}>
            <img src={props.picture} alt={props.name} />
          </div>

          <div class={styles.contact}>
            <p class={`${styles.name} bold`}>{props.name}</p>

            <Show when={props.link}>
              <div
                class={styles.link}
                onmouseenter={() => setLinkHover(true)}
                onmouseleave={() => setLinkHover(false)}
              >
                <a href={props.link} target="_blank">
                  <Show
                    when={linkHover()}
                    fallback={<img src="../../../public/link.svg" alt="link" />}
                  >
                    <img src="../../../public/link-hover.svg" alt="link" />
                  </Show>
                </a>
              </div>
            </Show>
          </div>

          <div class={styles.stars}>
            <img
              class={styles.star}
              src="../../../public/star.svg"
              alt="star"
            />
            <img
              class={styles.star}
              src="../../../public/star.svg"
              alt="star"
            />
            <img
              class={styles.star}
              src="../../../public/star.svg"
              alt="star"
            />
            <img
              class={styles.star}
              src="../../../public/star.svg"
              alt="star"
            />
            <img
              class={styles.star}
              src="../../../public/star.svg"
              alt="star"
            />
          </div>

          <p class={styles.review}>{props.review}</p>
        </div>
      </div>
    </>
  );
}
