'use client';

import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import { Ui } from '@/ui';

import { styles } from './stylesheet';

export default function View() {
  const [ref, isInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <main className={styles.main} ref={ref}>
      <h1 className={styles.title(isInView)}>
        <span className={styles.line}>
          <span className={styles.animatable}>
            <span className={styles.heavy}>Hello</span>
            <span className={styles.thin}>, my</span>
          </span>
        </span>
        <span className={styles.ending}>
          <span className={styles.animatable}>
            <span className={styles.thin}>name is </span>
            <span className={styles.serif}>Kyle</span>
          </span>
        </span>
      </h1>

      <p className={styles.travelling(isInView)}>
        <span className={styles.line}>
          <span className={styles.animatable}>
            <span className={styles.thin}>&mdash; an </span>
            <span className={styles.heavy}>inspired</span>
          </span>
        </span>
        <span className={styles.line}>
          <span className={styles.animatable}>
            <span className={`${styles.serif} ${styles.heavy}`}>backpacking</span>
          </span>
        </span>
        <span className={styles.line}>
          <span className={styles.animatable}>
            <span className={styles.thin}>& </span>
            <Link className={`${styles.link} ${styles.serif}`} href="/travels">
              travel
              <span className={styles.view}>( view travels )</span>
            </Link>
          </span>
        </span>
        <span className={styles.line}>
          <span className={styles.animatable}>
            <span className={styles.thin}>enthusiast </span>
            <span className={styles.thin}>&mdash;</span>
          </span>
        </span>
      </p>

      <p className={styles.living(isInView)}>
        <span className={styles.line}>
          <span className={styles.animatable}>
            <span className={styles.thin}>living</span>
            <span className={styles.heavy}> a</span>
          </span>
        </span>
        <span className={styles.line}>
          <span className={styles.animatable}>
            <span className={styles.heavy}>city</span>
            <span className={styles.thin}>&ndash;</span>
            <span className={styles.heavy}>based</span>
          </span>
        </span>
        <span className={styles.line}>
          <span className={styles.animatable}>
            <span className={styles.heavy}>life</span>
            <span className={styles.thin}> in</span>
          </span>
        </span>
        <span className={styles.line}>
          <span className={styles.animatable}>
            <span className={`${styles.serif} ${styles.heavy}`}>
              Chicago
            </span>
          </span>
        </span>
      </p>

      <p className={styles.working(isInView)}>
        <span className={styles.line}>
          <span className={styles.animatable}>
            <span className={styles.thin}>while </span>
            <span className={styles.thin}>Crafting</span>
          </span>
        </span>
        <span className={styles.line}>
          <span className={styles.animatable}>
            <span className={styles.thin}>digital</span>
            <span className={styles.heavy}>web</span>
          </span>
        </span>
        <span className={styles.line}>
          <span className={styles.animatable}>
            <span className={styles.serif}>experiences.</span>
          </span>
        </span>
      </p>

      <Link
        className={styles.instagram(isInView)}
        href="http://instagram.com/acrossthekyle"
        target="_blank"
      >
        Follow my <span className={styles.heavy}>Instagram</span>
      </Link>
      <Link
        className={styles.email(isInView)}
        href="mailto:hello@acrossthekyle.com"
      >
        <span className={styles.heavy}>Send</span> a letter
      </Link>

      <figure className={styles.figure(isInView)}>
        <Ui.Image
          className={styles.image}
          src="12a81235-f377-4a2c-ba0f-22fb36e8c399.jpeg"
          thumb="data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAgACgDAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDAgT/xAAjEAACAgEDBAMBAAAAAAAAAAABAgARUQMhMRITQWEEMmJx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AK9eAIB3DgQDufmAB/UBdzfgQJWazACTUA0XUqwfjOIASB52gLrwIElchlF8QKahYLu13AzoKWajsD5MBsrLvz7EBFh5swLH469XEDkf7kYgAdl4NQNpqsHu/wCjMDY0y52FLA//2Q=="
        />
        <div className={styles.cross} role="presentation" />
      </figure>
    </main>
  );
}
