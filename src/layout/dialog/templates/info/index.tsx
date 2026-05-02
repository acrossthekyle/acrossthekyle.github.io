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
        Hi, I'm Kyle
        <span className={styles.subheader}>
          Origin: Gaelic • Meaning: channel, sound, or strait
        </span>
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
        My interest in dirt paths, alpine peaks, and a curiosity to explore was born from a 2016 trek in the South American Andes mountains of Chile, and further cemented by a 600-mile thru-hike across Northern Spain in 2018 on a network of trails called El Camino de Santiago.
      </p>
      <p>
        Ever since then I've thru-hiked dozens of trails, and been to heights I never thought I'd reach, all by foot.
      </p>
      <p>
        Those experiences from trails, mountain tops, walking city streets, and exploring ancient monuments are captured by the camera bump on the back of my phone and sometimes featured here on my website.
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
          src="8ed54501-bdcb-40b7-9387-f2fc306db83d.png"
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
              <Send className={styles.external} />
            </Link>
          </div>
        </figcaption>
      </figure>
      <div className={styles.spacer} />
    </article>
  );
}
