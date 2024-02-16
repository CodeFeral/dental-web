import styles from "./ServiceGroup.module.css";

import Service from "./Service";

export default function ServiceGroup() {
  return (
    <div class={styles.container}>
      <Service
        title="Cariesology"
        description="Protection, treatment, and restoration of teeth damaged by caries."
        image="../../../public/services/cariesology.svg"
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
        title="Pediatric Dentistry"
        description="Careful and individual approach when working with children of all ages."
        image="../../../public/services/pediatric.svg"
        href="#"
      />
      <Service
        title="Aesthetics"
        description="Teeth whitening, Cosmetic build-ups (bonding), Veneers, etc."
        image="../../../public/services/aesthetics.svg"
        href="#"
      />
      <Service
        title="Consultation"
        description="Expert advice and tailored care plans for dental health needs."
        image="../../../public/services/consultation.svg"
        href="#"
      />
    </div>
  );
}

// <Service
//   title="Prosthetics"
//   description="Restoration of edentulous areas with removable or fixed constructions."
//   image="../../../public/services/prosthetics.svg"
// />;
