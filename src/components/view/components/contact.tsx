'use client';

import { useForm, ValidationError } from '@formspree/react';

import styles from '@/styles/components/view/components/contact.module.scss';

function Contact() {
  const [state, handleSubmit] = useForm('mgvwwylj');

  return (
    <>
      {state.succeeded && <p>Thanks for reaching out!</p>}
      {!state.succeeded && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            required
            type="email"
          />
          <ValidationError errors={state.errors} field="email" prefix="Email" />
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={styles.textarea}
            id="message"
            maxLength={255}
            name="message"
            required
            rows={4}
          />
          <ValidationError
            errors={state.errors}
            field="message"
            prefix="Message"
          />
          <button
            className={styles.submit}
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
}

export default Contact;
