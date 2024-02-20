import Narrative from "../../components/narrative/Narrative";
import Service from "../../components/services/Service";
import styles from "./ServiceSection.module.css";

export default function ServiceSection() {
  return (
    <section id="service-section" class={styles.section}>
      <div class={styles.container}>
        <Narrative
          title="Services"
          heading="What Services We Offer"
          description="We offer a comprehensive range of services to help you
            achieve optimal oral health and well-being."
        />

        <div class={styles.content}>
          <Service
            title="Aesthetics"
            description="Teeth whitening, Cosmetic build-ups (bonding), Veneers, and more."
            image="../../../public/services/aesthetics.svg"
            href="#"
          />
          <Service
            title="Endodontics"
            description="Treating tooth pulp diseases and a variety of related complications."
            image="../../../public/services/endodontics.svg"
            href="#"
          />
          <Service
            title="Oral Surgery"
            description="Procedures like tooth and cyst removal, and wisdom tooth extraction."
            image="../../../public/services/surgery.svg"
            href="#"
          />
          <Service
            title="Implantology"
            description="Titanium implants in edentulous areas to restore masticatory function."
            image="../../../public/services/implantology.svg"
            href="#"
          />
          <Service
            title="Periodontology"
            description="Cleaning of tartar and control over the diseases of the gums."
            image="../../../public/services/peridontology.svg"
            href="#"
          />
          <Service
            title="Cariesology"
            description="Protection, treatment, and restoration of teeth damaged by caries."
            image="../../../public/services/cariesology.svg"
            href="#"
          />
          <Service
            title="Pediatric Dentistry"
            description="Careful and calm approach when working with children of all ages."
            image="../../../public/services/pediatric.svg"
            href="#"
          />
          <Service
            title="Consultation"
            description="Expert advice and tailored care plans for all dental health needs."
            image="../../../public/services/consultation.svg"
            href="#"
          />
        </div>
      </div>
    </section>
  );
}
