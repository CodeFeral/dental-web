import Question from "../../components/question/Question";
import Wave from "../../components/wave/Wave";
import styles from "./QuestionsSection.module.css";

export default function QuestionsSection() {
  return (
    <>
      <Wave top={true} />
      <section id="questions-section" class={styles.section}>
        <div class={styles.container}>
          <div class={styles.content}>
            <Question
              question="What should I expect during my first visit?"
              answer="A friendly atmosphere. Your first visit will typically involve an evaluation of your oral health, without any judgment, ever. If appropriate, we can discuss your dental history and any concerns you may have."
            />
            <Question
              question="Can I come in for a dental emergency?"
              answer="Yes, we prioritize dental emergencies and strive to see patients as soon as possible. If you're in pain or have suffered dental trauma, please call us immediately for guidance and to schedule an appointment."
            />
            <Question
              question="How often should I visit the dentist?"
              answer="It is recommended to visit the dentist for check-ups and cleanings at least twice a year. However, depending on your specific oral health needs, we may recommend more frequent visits."
            />
            <Question
              question="How can I prevent gum disease?"
              answer="Preventing gum disease involves maintaining good oral hygiene practices, including brushing twice a day, flossing daily, and regular dental check-ups and cleanings. Lifestyle choices, such as a balanced diet and quitting smoking, also play a crucial role."
            />
            <Question
              question="How can I improve my child's dental health?"
              answer="Encourage good oral hygiene practices from an early age, including brushing twice a day and flossing daily. Limit sugary snacks and drinks, ensure a balanced diet, and schedule regular dental visits (at your child-friendly clinic) for check-ups and cleanings."
            />
            <Question
              question="How do I know if I have a cavity?"
              answer="Common signs of a cavity include toothache, sensitivity to hot and cold, visible holes in your tooth, and pain when eating. However, some cavities show no symptoms, so regular dental check-ups are essential."
            />
            <Question
              question="How do I know if I need braces?"
              answer="Signs you might need braces include crowded or crooked teeth, gaps between teeth, and difficulty biting or chewing. An orthodontic consultation can determine if braces are right for you."
            />
            <Question
              question="Is flossing really important?"
              answer="Yes, flossing is crucial as it removes plaque and food particles from between the teeth and under the gum line, areas where a toothbrush can't reach. Daily flossing is essential for maintaining healthy gums."
            />
            <Question
              question="What is cosmetic dentistry, and what options are available?"
              answer="Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and bite. Options include teeth whitening, veneers, bonding, and orthodontic treatments for a better smile."
            />
            <Question
              question="What are dental implants?"
              answer="Dental implants are a durable and natural-looking solution for replacing missing teeth. An implant is a titanium post surgically placed in the jawbone, topped with a replacement tooth or crown."
            />
            <Question
              question="What is a root canal treatment?"
              answer="A root canal treatment is a procedure to save a severely damaged or infected tooth. The procedure involves removing the damaged area of the tooth, cleaning and disinfecting it, and then filling and sealing it."
            />
            <Question
              question="What is the best way to whiten my teeth?"
              answer="The best whitening method depends on your dental health and whitening goals. We offer a range of options from professional in-office treatments to custom-made take-home kits, ensuring the safest and most effective results."
            />
          </div>
        </div>
      </section>
      <Wave top={false} />
    </>
  );
}
