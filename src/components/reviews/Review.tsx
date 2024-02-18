import { Show } from "solid-js";
import styles from "./Review.module.css";

interface ReviewProps {
  picture: string;
  name: string;
  review: string;
  link?: string;
}

export default function Review(props: ReviewProps) {
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
              <div class={styles.link}>
                <a href={props.link} target="_blank">
                  <img src="../../../public/link.svg" alt="link" />
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
