import Contact from "../../components/contact/Contact";
import Form from "../../components/form/Form";
import Map from "../../components/map/Map";
import Wave from "../../components/wave/Wave";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <>
      <Wave top={true} />

      <section id="contact-section" class={styles.section}>
        <div class={styles.container}>
          <div class={styles.content}>
            <div class={styles.group}>
              <Contact />
              <Form />
            </div>

            <Map />
          </div>
        </div>
      </section>

      <Wave top={false} />
    </>
  );
}
