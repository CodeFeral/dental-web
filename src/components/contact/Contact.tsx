import styles from "./Contact.module.css";
import ContactRow from "./ContactRow";

export default function Contact() {
  return (
    <div class={styles.container}>
      <ContactRow
        title="Phone Number"
        image="../../../public/contact/phone.svg"
        imageAlt="phone"
        description="+359 885 691 021"
        href="tel:0885691021"
      />

      <ContactRow
        title="Open Hours"
        image="../../../public/contact/clock.svg"
        imageAlt="clock"
        description="09:00 - 21:00"
      />

      <ContactRow
        title="Clinic Address"
        image="../../../public/contact/location.svg"
        imageAlt="location"
        description='ul. "Biser" 2 g.k. Lozenets, Sofia'
        href="https://maps.app.goo.gl/AbfHVwvSV4ob8fFy5"
        target
      />

      <ContactRow
        title="Emergency"
        image="../../../public/contact/emergency.svg"
        imageAlt="emergency"
        description="24/7 Emergency Support"
        emergency
        href="tel:0885691021"
      />
    </div>
  );
}
