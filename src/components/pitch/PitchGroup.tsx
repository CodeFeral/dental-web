import Pitch from "./Pitch";
import styles from "./PitchGroup.module.css";

export default function PitchGroup() {
  return (
    <div class={styles.container}>
      <Pitch
        image="../../../public/pitch/doctor.svg"
        title="Individualization"
        description="Dentistry demands a personalized approach; no two smiles are alike. I aim for perfection, customizing your care to fit your unique needs. Throughout your treatment, I focus on education, ensuring you leave with not just a healthier smile, but also increased confidence in your dental health."
      />
      <Pitch
        image="../../../public/pitch/tooth-green-svgrepo-com.svg"
        title="Anxiety Free"
        description="At my clinic, my priority is to ensure your comfort and peace of mind. Moving away from the conventional dental experience, I've created an environment where stress-free care is the norm. My approach is personal and tailored to your individual needs, ensuring every aspect of your visit is focused on making you feel relaxed."
      />
      <Pitch
        image="../../../public/pitch/display-teeth-svgrepo-com.svg"
        title="Modern Approach"
        description="Step into the future of dentistry, where tradition meets innovation. My practice is designed to make your experience as smooth and convenient as possible. With a unique, high-tech approach, I focus on minimizing your anxiety and providing efficient services that save you time, often with same-day results."
      />
    </div>
  );
}
