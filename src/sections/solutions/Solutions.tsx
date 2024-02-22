import { createSignal, onMount } from "solid-js";
import styles from "./Solutions.module.css";

import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./SolutionsSwiper.css";
import Wave from "../../components/wave/Wave";

export default function SolutionsSection() {
  const [reveal, setReveal] = createSignal(false);

  onMount(() => {
    new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      loop: false,
      slidesPerView: "auto",
      spaceBetween: 6,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });

  return (
    <>
      <Wave top={true} />
      <section id="solutions-section" class={styles.section}>
        <div class={styles.container}>
          <div class={styles.content}>
            <div class={styles.info}>
              <h2>Having problems?</h2>
              <p>Don't worry. We have the solutions.</p>
            </div>

            <div
              class={`button ${styles.button}`}
              onclick={() => setReveal(!reveal())}
            >
              {reveal() ? "Hide" : "Reveal"}
            </div>

            <div
              class={`swiper ${reveal() ? styles.reveal : styles.hide}`}
              onclick={() => setReveal(!reveal())}
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img
                    class={styles.image}
                    src="../../../public/solutions/1.png"
                    loading="lazy"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    class={styles.image}
                    src="../../../public/solutions/2.png"
                    loading="lazy"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    class={styles.image}
                    src="../../../public/solutions/3.png"
                    loading="lazy"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    class={styles.image}
                    src="../../../public/solutions/4.png"
                    loading="lazy"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    class={styles.image}
                    src="../../../public/solutions/5.png"
                    loading="lazy"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    class={styles.image}
                    src="../../../public/solutions/6.png"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
      <Wave top={false} />
    </>
  );
}
