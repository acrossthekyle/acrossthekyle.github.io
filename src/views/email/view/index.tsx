'use client';

import { useForm, ValidationError } from '@formspree/react';

import { Layout } from '@/layout';

import styles from './stylesheet';

export default function View() {
  const [state, handleSubmit] = useForm('mgvwwylj');

  return (
    <Layout group="email">
      <article>
        <h2>
          <strong>Email</strong>
          <small>hello@acrossthekyle.com</small>
        </h2>
        <p>
          Interested in working together or curious about my travels? Reach out below.
        </p>
      </article>
      <section aria-label="contact form">
        {state.succeeded && (
          <div className={styles.alert} role="alert">
            Thanks for reaching out!
          </div>
        )}
        {!state.succeeded && (
          <form className={styles.container} onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="email">
              Your email
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
              A brief message
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
            >
              Send
            </button>
          </form>
        )}
      </section>
    </Layout>
  );
}
