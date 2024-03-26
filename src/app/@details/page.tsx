'use client'

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';

import { SettingsContext } from 'contexts/settings';
import { EventsContext } from 'contexts/events';
import travels from 'data/travels'
import styles from 'scss/app/page.module.scss'

export default function Page() {
  const { registerEventListener } = useContext(EventsContext);
  const {
    isDarken,
    isImageless,
    isMonochrome,
    toggleDarken,
    toggleImageless,
    toggleMonochrome,
  } = useContext(SettingsContext);

  const [index, setIndex] = useState(0);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    registerEventListener(handleEvent);
  }, []);

  const handleEvent = (event: any) => {
    setIndex(event);
  };

  return (
    <section className={styles.slot} data-settings-active={isSettingsOpen}>
      <div className={styles.link} id="slot-label">
        <Link href={`/travels/${travels[index].year}/${travels[index].id}`}>
          {travels[index].title.join(' ')}
        </Link>
        <span>
          {index + 1}/{travels.length}
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
