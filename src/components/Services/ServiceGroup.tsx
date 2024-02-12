import styles from "./ServiceGroup.module.css";

import Service from "./Service";

export default function ServiceGroup() {
  return (
    <div class={styles.container}>
      <Service
        title="Cariesology"
        description="Treatment and restoration of teeth damaged by caries."
        image="../../public/services/caries.svg"
      />
      <Service
        title="Endodontics"
        description="Treating tooth pulp diseases and a variety of related complications."
        image="../../public/services/instruments.svg"
      />
      <Service
        title="Oral Surgery"
        description="Procedures like tooth removal, wisdom tooth extraction, and cyst removal."
        image="../../public/services/scalpel.svg"
      />
      <Service
        title="Prosthetics"
        description="Restoration of edentulous areas with removable or fixed constructions."
        image="../../public/services/tooth-plus.svg"
      />
      <Service
        title="Implantology"
        description="Placement of titanium implants in the edentulous area, restoring masticatory function."
        image="../../public/services/implantology.svg"
      />
      <Service
        title="Periodontology"
        description="Cleaning of tartar and control over the diseases of the gums."
        image="../../public/services/crossed.svg"
      />
    </div>
  );
}
