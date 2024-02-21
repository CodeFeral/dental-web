import Contact from "../../components/contact/Contact";
import Form from "../../components/form/Form";
import Map from "../../components/map/Map";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact-section" class={styles.section}>
      <div class="wave">
        <img src="../../../public/waves/top-1.svg" />
      </div>

      <div class={styles.container}>
        <div class={styles.content}>
          <div class={styles.group}>
            <Contact />
            <Form />
          </div>

          <Map />
        </div>
      </div>

      <div class="wave">
        <img src="../../../public/waves/bot-1.svg" />
      </div>
    </section>
  );
}
