import Pitch from "./Pitch";
import styles from "./PitchGroup.module.css";

export default function PitchGroup() {
  return (
    <div class={styles.container}>
      <div class={styles.content}>
        <div class={styles.group}>
          <Pitch
            image="../../../public/pitch/shield.svg"
            title="Safety"
            description="Your health is my utmost priority. In my practice, I provide a secure and comforting environment, ensuring your safety by the highest standards."
          />
          <Pitch
            image="../../../public/pitch/tooth-green.svg"
            title="Expertise"
            description="With refined skill honed through years of dedicated practice, I ensure every aspect of your dental care is handled by an expert touch."
          />
        </div>
        <div class={styles.group}>
          <Pitch
            image="../../../public/pitch/doctor.svg"
            title="Individualization"
            description="Recognizing the uniqueness of each smile, I personally tailor your dental care to ensure the health and radiance of yours."
          />
          <Pitch
            image="../../../public/pitch/display-tooth.svg"
            title="Technology"
            description="Step into the future of dentistry, blending time-honored traditions with cutting-edge technology for effective and efficient treatment."
          />
        </div>
      </div>
    </div>
  );
}

// "Dentistry demands a personalized approach; no two smiles are alike. I aim for perfection, customizing your care to fit your unique needs. Throughout your treatment, I focus on education, ensuring you leave with not just a healthier smile, but also increased confidence in your dental health."
//
// "At my clinic, my priority is to ensure your comfort and peace of mind. Moving away from the conventional dental experience, I've created an environment where stress-free care is the norm. My approach is personal and tailored to your individual needs, ensuring every aspect of your visit is focused on making you feel relaxed." "Safety"
//
// "Your safety is my top priority. In my clinic, I adhere to the highest standards of sterilization and infection control, ensuring a safe and hygienic environment for every patient. My team and I are dedicated to providing not only effective dental care but also a secure setting where you can feel at ease, knowing you're in good hands. From routine check-ups to complex procedures, every aspect of your visit is conducted with your safety and well-being in mind."
