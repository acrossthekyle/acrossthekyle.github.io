'use client';

import { useForm, ValidationError } from '@formspree/react';

import { Layout } from '@/layout';

import styles from './stylesheet';

export default function View() {
  const [state, handleSubmit] = useForm('mgvwwylj');

  return (
    <Layout group="email">
      <header>
        <h1>
          <strong>
            Email
          </strong>
          <small>
            <em>Reach out and say hello</em>
          </small>
        </h1>
        <p>
          I'm always open to new opportunities. If you're interested in working together, or have questions about the trails and travels that I've done, you can reach me directly via hello [at] acrossthekyle.com, or fill out the short form below.
        </p>
      </header>
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
    </Layout>
  );
}
