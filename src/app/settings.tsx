'use client'

import { useContext } from 'react';

import { SettingsContext } from 'contexts/settings';
import styles from 'scss/app/settings.module.scss'

export default function Settings() {
  const {
    isDarken,
    isImageless,
    isMonochrome,
    toggleDarken,
    toggleImageless,
    toggleMonochrome,
  } = useContext(SettingsContext);

  return (
	  <div className={styles.settings}>
      <button
        onClick={toggleDarken}
        title="Darken or lighten the mood"
        type="button"
      >
        (D)arken [ {isDarken ? 'Y' : 'N'} ]
      </button>
      <button
        onClick={toggleImageless}
        title="Do not display images"
        type="button"
      >
        (I)mages [ {isImageless ? 'N' : 'Y'} ]
      </button>
      <button
        onClick={toggleMonochrome}
        title="Make everything gray"
        type="button"
      >
        (C)olors [ {isMonochrome ? 'N' : 'Y'} ]
      </button>
    </div>
  );
}
