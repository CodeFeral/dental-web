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
          [styles.hide]: !show(),
        }}
      >
        <Link
          name="Home"
          href="#landing-section"
          callback={() => setShow(false)}
        />
        <Link
          name="Services"
          href="#service-section"
          callback={() => setShow(false)}
        />
        <Link
          name="FAQ"
          href="#questions-section"
          callback={() => setShow(false)}
        />
        <Link
          name="About"
          href="#about-section"
          callback={() => setShow(false)}
        />
        <Link
          name={"Before & After"}
          href="#after-section"
          callback={() => setShow(false)}
        />
        <Link
          name="Testimonials"
          href="#testimonials-section"
          callback={() => setShow(false)}
        />
        <Link
          name="Contact"
          href="#contact-section"
          callback={() => setShow(false)}
        />
      </div>
    </nav>
  );
}

interface LinkProps {
  name: string;
  href: string;
  callback: () => void;
}

function Link(props: LinkProps) {
  return (
    <a class={styles.link} href={props.href} onclick={() => props.callback()}>
      {props.name}
    </a>
  );
}
