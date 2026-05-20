'use client';

import { Send, X } from 'lucide-react';
import Link from 'next/link';

import { useDialog } from '@/hooks/useDialog';
import { Ui } from '@/ui';

import styles from './stylesheet';

export default function Template() {
  const { onClose } = useDialog();

  return (
    <article className={styles.container}>
      <h2 className={styles.header} id="dialog-header">
        A collection of hikes, summits, and experiences
      </h2>
      <button
        aria-label="close info"
        className={styles.close}
        onClick={onClose}
        type="button"
      >
        <X className={styles.icon} />
      </button>
      <p>
        My obsession with trails, alpine peaks, and a curiosity to explore was born out of a 2016 trip to the Andes mountains of Chile, and a 600-mile thru-hike across Northern Spain in 2018 on the Camino de Santiago.
      </p>
      <p>
        Those experiences, and others, from trails, mountain tops, walking city streets, and exploring ancient monuments are captured by the camera bump on the backs of phones and sometimes featured here.
      </p>
      <p>
        Between adventures my partner and I indulge in things that fuel imagination and critical thinking; from books, videos, and podcasts, to films and more, all while enjoying long walks and relaxing in a hammock with our dog Dax, as we live a city-based life in Chicago.
      </p>
      <p>
        I'm also an avid software developer who loves building web applications with an approach rooted in a genuine thrill for writing code, even after a career of {new Date().getFullYear() - 2012} years.
      </p>
      <figure className={styles.figure}>
        <Ui.Image
          className={styles.image}
          src="8ed54501-bdcb-40b7-9387-f2fc306db83d.png?tr=w-100,q-100"
        />
        <figcaption className={styles.caption}>
          <address className={styles.author}>
            <span className={styles.signature}>Kyle</span>
            <span className={styles.title}>See you out there</span>
          </address>
          <div className={styles.links}>
            <Link
              className={styles.link}
              href="mailto:hello@acrossthekyle.com"
              title="Send me an email"
            >
              <Send className={styles.icon} />
            </Link>
          </div>
        </figcaption>
      </figure>
    </article>
  );
}
