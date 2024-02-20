import Narrative from "../../components/narrative/Narrative";
import Testimonial from "../../components/testimonial/Testimonial";
import styles from "./TestimonialsSection.module.css";

export default function TestimonialsSection() {
  return (
    <section id="testimonials-section" class={styles.section}>
      <div class={styles.container}>
        <Narrative
          title="Testimonials"
          heading="What Our Clients Say"
          description="Hear from our satisfied clients about their experiences at our
            clinic. Our testimonials reflect our commitment to excellence in
            patient care, quality treatments, and outstanding customer service."
        />

        <div class={styles.content}>
          <Testimonial
            name="Sofia Boqnova"
            review="Surprisingly pleasant experience for a wisdom tooth extraction. Dr. Georgi was efficient and reassuring throughout the procedure."
            picture="../../../public/reviews/sofi.png"
            link="https://www.instagram.com/sofiqboqnova/"
          />

          <Testimonial
            name="Asen Todorov"
            review="I took my daughter to Dr. Bagdatov for her first dental visit. He was fantastic with kids – patient, friendly, and made her laugh."
            picture="../../../public/reviews/asen.png"
          />

          <Testimonial
            name="Desislava Petrova"
            review="Went to Dr. Georgi for a second opinion and ended up staying with him. His approach to dental care is practical and straightforward."
            picture="../../../public/reviews/desi.png"
            link="https://www.instagram.com/this_is_lava/"
          />

          <Testimonial
            name="Kaloyan Ivanov"
            review="Quality care at surprisingly affordable rates. Highly recommended."
            picture="../../../public/reviews/kaloyan.png"
            link="https://www.instagram.com/_k.ivvanovv/"
          />

          <Testimonial
            name="Maria Georgieva"
            review="Brought my elderly mother to Dr. Bagdatov. He was exceptionally patient and understanding."
            picture="../../../public/reviews/maria.png"
          />

          <Testimonial
            name="Ioan Boqnov"
            review="From the reception to the dental chair, everything was top-notch. Overall 5-star experience."
            picture="../../../public/reviews/ioan.png"
            link="https://www.instagram.com/ioanboqnov/"
          />

          <Testimonial
            name="Vasil Kostov"
            review="The go-to place for dental emergencies. Quick to respond and extremely efficient. Very grateful for his prompt help!"
            picture="../../../public/reviews/vasil.png"
          />

          <Testimonial
            name="Dobry Nikolov"
            review="I highly recommend Dr. Bagdatov to anyone looking for a reliable and skilled dentist."
            picture="../../../public/reviews/dobry.png"
            link="https://www.instagram.com/bovfbovf/"
          />
        </div>
      </div>
    </section>
  );
}
