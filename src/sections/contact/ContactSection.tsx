import Contact from "../../components/contact/Contact";
import Form from "../../components/form/Form";
import Map from "../../components/map/Map";
import Wave from "../../components/wave/Wave";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact-section" class={styles.section}>
      <Wave blue={true} top={true} />

      <div class={styles.container}>
        <div class={styles.content}>
          <div class={styles.group}>
            <Contact />
            <Form />
          </div>

          <Map />
        </div>
      </div>

      <Wave blue={true} top={false} />
    </section>
  );
}
