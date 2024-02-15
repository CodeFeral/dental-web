import styles from "./Map.module.css";

export default function Map() {
  return (
    <div class={styles.container}>
      <div class={styles.content}>
        <div class={styles.holder}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.0104626575694!2d23.323397899999996!3d42.68232069999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8508a2d29f03%3A0xcc8e5131ecb66c5e!2z0LYu0LouINCb0L7Qt9C10L3QtdGGLCDRg9C7LiDigJ7QkdC40YHQtdGA4oCcIDIsIDE0MjEg0KHQvtGE0LjRjw!5e0!3m2!1sbg!2sbg!4v1707955282881!5m2!1sbg!2sbg"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
