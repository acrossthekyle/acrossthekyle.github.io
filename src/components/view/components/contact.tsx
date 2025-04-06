'use client';

import { useForm, ValidationError } from '@formspree/react';

import Styles from '@/styles';

const scss = Styles.Components.View.Components.Contact;

function Contact() {
  const [state, handleSubmit] = useForm('mgvwwylj');

  return (
    <>
      {state.succeeded && <p>Thanks for reaching out!</p>}
      {!state.succeeded && (
        <form className={scss.form} onSubmit={handleSubmit}>
          <label className={scss.label} htmlFor="email">
            Email
          </label>
          <input
            className={scss.input}
            id="email"
            name="email"
            required
            type="email"
          />
          <ValidationError errors={state.errors} field="email" prefix="Email" />
          <label className={scss.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={scss.textarea}
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
            className={scss.submit}
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
