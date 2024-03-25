'use client'

import { useContext, useState } from 'react';
import Link from 'next/link';

import { SettingsContext } from 'contexts/settings';
import { SlotsContext } from 'contexts/slots';
import adventures from 'data/adventures'
import styles from 'scss/app/page.module.scss'

export default function Page() {
  const {
    isDarken,
    isImageless,
    isMonochrome,
    toggleDarken,
    toggleImageless,
    toggleMonochrome,
  } = useContext(SettingsContext);
  const { slotIndex, setSlotIndex } = useContext(SlotsContext);

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <section className={styles.slot} data-settings-active={isSettingsOpen}>
      <div className={styles.link} id="slot-label">
        <Link href={`/adventures/${adventures[slotIndex].id}`}>
          {adventures[slotIndex].title.join(' ')}
        </Link>
        <span>
          {slotIndex + 1}/{adventures.length}
        </span>
      </div>
      <div className={styles.settings}>
        <button
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          type="button"
        >
          {isSettingsOpen ? 'Close' : 'Open'} Settings
        </button>
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
      </div>
    </section>
  );
}
