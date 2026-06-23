import type { Collection } from '@/types';
import { Ui } from '@/ui';

import { styles } from './stylesheet';
import Travels from './travels';

type Props = {
  data: {
    collections: Collection[];
  };
};

export default function View({ data }: Props) {
  return (
    <>
      <h1 className={styles.header}>
        <span className={`${styles.set} ${styles.end}`}>
          <span className={styles.thin}>Hi,</span>
          <span>I'm <span className={styles.serif}>Kyle</span></span>
        </span>
        <span />
        <span />
        <span className={`${styles.set} ${styles.start}`}>
          <span><span className={styles.thin}>an</span> inspired</span>
          <span className={styles.serif}>backpacker</span>
          <span><span className={styles.thin}>and</span> travel</span>
          <span className={styles.serif}>enthusiast</span>
        </span>
        <span className={`${styles.set} ${styles.end}`}>
          <span><span className={styles.thin}>living</span> a</span>
          <span>city-based</span>
          <span>life <span className={styles.thin}>in</span></span>
          <span className={styles.serif}>Chicago.</span>
        </span>
        <span />
      </h1>
      <figure className={styles.figure}>
        <Ui.Image
          className={styles.image}
          src="12a81235-f377-4a2c-ba0f-22fb36e8c399.jpeg"
          thumb="data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAgACgDAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDAgT/xAAjEAACAgEDBAMBAAAAAAAAAAABAgARUQMhMRITQWEEMmJx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AK9eAIB3DgQDufmAB/UBdzfgQJWazACTUA0XUqwfjOIASB52gLrwIElchlF8QKahYLu13AzoKWajsD5MBsrLvz7EBFh5swLH469XEDkf7kYgAdl4NQNpqsHu/wCjMDY0y52FLA//2Q=="
        />
      </figure>
      <h2 className={styles.heading}>
        <span className={styles.title}>About</span>
        <span className={styles.lid}>A shortened backstory</span>
      </h2>
      <p className={styles.paragraph}>
        My inspiration for backpacking arose in the <span className={styles.emphasis}>Andes mountains of S. America</span> while vacationing in Santiago and the Torres del Paine region of <span className={styles.emphasis}>Patagonia</span> in March 2016.
      </p>
      <p className={styles.paragraph}>
        Two years later I embarked on my debut long-distance backpacking adventure by walking <span className={styles.emphasis}>600 miles</span> over 35 days across Northern Spain on a route called <span className={styles.emphasis}>El Camino De Santiago</span> that took me over mountains, through forests, and across deserts. Needless to say, it left a lasting impression.
      </p>
      <p className={styles.paragraph}>
        Since then I've travelled to numerous destinations — from the heights of the Himalayas in Nepal to the rainy shores of Scotland — and spent hundreds of days <span className={styles.emphasis}>traipsing through nature</span>, and over mountain passes, all around the world.
      </p>
      <h2 className={styles.heading}>
        <span className={styles.title}>Travels</span>
        <span className={styles.lid}>A nearly complete list</span>
      </h2>
      <Travels collections={data.collections} />
    </>
  );
}
