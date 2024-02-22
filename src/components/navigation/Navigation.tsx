import { createSignal } from "solid-js";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [show, setShow] = createSignal(false);

  return (
    <nav class={styles.container}>
      <div
        classList={{
          [styles.toggle]: true,
          [styles.active]: show(),
        }}
        onclick={() => {
          setShow(!show());
        }}
      >
        <div class={styles["toggle-icon"]}></div>
        <div class={styles["toggle-icon"]}></div>
        <div class={styles["toggle-icon"]}></div>
      </div>

      <div
        classList={{
          [styles.content]: true,
          [styles.show]: show(),
        }}
      >
        <Link
          name="Home"
          href="#landing-section"
          handleClick={() => setShow(false)}
        />
        <Link
          name="Services"
          href="#service-section"
          handleClick={() => setShow(false)}
        />
        <Link
          name="FAQ"
          href="#questions-section"
          handleClick={() => setShow(false)}
        />
        <Link
          name="About"
          href="#about-section"
          handleClick={() => setShow(false)}
        />
        <Link
          name={"Solutions"}
          href="#solutions-section"
          handleClick={() => setShow(false)}
        />
        <Link
          name="Testimonials"
          href="#testimonials-section"
          handleClick={() => setShow(false)}
        />
        <Link
          name="Contact"
          href="#contact-section"
          handleClick={() => setShow(false)}
        />
      </div>
    </nav>
  );
}

interface LinkProps {
  name: string;
  href: string;
  handleClick: () => void;
}

function Link(props: LinkProps) {
  return (
    <a class={styles.link} href={props.href} onclick={() => props.handleClick()}>
      {props.name}
    </a>
  );
}
