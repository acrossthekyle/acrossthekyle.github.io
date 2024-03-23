'use client'

import { useContext } from 'react';

import { SettingsContext } from 'contexts/settings';

import styles from 'scss/app/settings/page.module.scss'

export default function Page() {
  const {
    isDarken,
    isImageless,
    isMonochrome,
    toggleDarken,
    toggleImageless,
    toggleMonochrome,
  } = useContext(SettingsContext);

  return (
    <article className={styles.settings}>
      <section>
        <label htmlFor="darken">
          <input checked={isDarken} id="darken" onChange={toggleDarken} type="checkbox" />
          Dark mode
        </label>

        <label htmlFor="images">
          <input checked={isImageless} id="images" onChange={toggleImageless} type="checkbox" />
          No Images
        </label>

        <label htmlFor="colors">
          <input checked={isMonochrome} id="colors" onChange={toggleMonochrome} type="checkbox" />
          B & W
        </label>
      </section>
    </article>
  );
}
