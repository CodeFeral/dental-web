import styles from "./Contact.module.css";
import ContactRow from "./ContactRow";

export default function Contact() {
  return (
    <div class={styles.container}>
      <ContactRow
        title="Phone Number"
        image="/contact-phone.svg"
        description="+359 885 691 021"
        href="tel:0885691021"
      />
      <ContactRow
        title="Email"
        image="/contact-email.svg"
        description="g.bagdatov@gmail.com"
        href="mailto:g.bagdatov@gmail.com"
      />
      <ContactRow
        title="Clinic Address"
        image="/contact-location.svg"
        description='ul. "Biser" 2 g.k. Lozenets, Sofia'
        href="https://maps.app.goo.gl/AbfHVwvSV4ob8fFy5"
      />
      <ContactRow
        title="Open Hours"
        image="/contact-clock.svg"
        description="09:00 - 21:00"
      />
    </div>
  );
}
