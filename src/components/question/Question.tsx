import { createSignal } from "solid-js";
import styles from "./Question.module.css";

interface QuestionProps {
  question: string;
  answer: string;
}

export default function Question(props: QuestionProps) {
  const [show, setShow] = createSignal(false);

  return (
    <div class={styles.container} onclick={() => setShow(!show())}>
      <div class={styles.question}>
        <p class="disable-selection">{props.question}</p>
        <img
          classList={{
            [styles.arrow]: true,
            [styles.unrotate]: !show(),
            [styles.rotate]: show(),
          }}
          src="../../../public/down.svg"
        />
      </div>

      <p
        classList={{
          [styles.answer]: true,
          [styles.closed]: !show(),
          [styles.open]: show(),
        }}
      >
        {props.answer}
      </p>
    </div>
  );
}
