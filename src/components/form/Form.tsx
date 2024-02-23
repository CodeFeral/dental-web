import styles from "./Form.module.css";

export default function Form() {
  return (
    <div class={styles.container}>
      <form
        class={styles.form}
        method="post"
        action="https://www1.domain.com/scripts/formemail.html"
      >
        <div class={styles.content}>
          <input type="hidden" name="my_email" value="g.bagdatov@gmail.com" />

          <div class={styles.group}>
            <input
              class={styles.input}
              type="text"
              name="fullname"
              size="25"
              placeholder="Name"
              required
            />
          </div>

          <div class={styles.group}>
            <input
              class={styles.input}
              type="email"
              name="email"
              size="25"
              placeholder="Email"
              required
            />
          </div>

          <div class={styles.group}>
            <textarea
              class={styles.textarea}
              name="message"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <input
            type="hidden"
            name="subject"
            value="form submission from %%fullname%%"
          />

          <input type="hidden" name="required" value="email, fullname" />

          <div class={`${styles["button-container"]} ${styles.group}`}>
            <input
              class={`${styles.button} button`}
              type="submit"
              name="submit"
              value="Submit Now"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
