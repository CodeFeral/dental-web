import Contact from "../../components/contact/Contact";
import Form from "../../components/form/Form";
import Map from "../../components/map/Map";
import styles from "./Contact.module.css";

export default function ContactSection() {
  return (
    <section class={styles.section}>
      <div class={styles.container}>
        <div class={styles.content}>
          <Contact />
          <Form />
          <Map />
        </div>
      </div>
    </section>
  );
}
