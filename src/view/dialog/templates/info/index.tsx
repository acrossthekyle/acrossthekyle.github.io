'use client';

import { Image } from '../../../ui/image';

import styles from './stylesheet';

export default function Template() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header} id="dialog-header">
        Backstory
        <span className={styles.subheader}>
          A collection of trails and destinations
        </span>
      </h2>
      <p>
        My interest in hiking dirt paths, alpine peaks, and a curiosity to explore, was born from a 2016 trek in the South American Andes mountains of Chile, and further cemented by a 600-mile thru-hike across Northern Spain in 2018 on a network of trails called The Camino de Santiago.
      </p>
      <p>
        Ever since then I've thru-hiked dozens of trails, and reached never-before-imagined heights, all by foot (with some flying sprinkled here and there).
      </p>
      <p>
        Those experiences from the trail, mountain tops, walking city streets, and exploring ancient monuments, were captured from the little (ok, big) camera bump on the back of a phone.
      </p>
      <p>
        Between adventures I indulge in things that fuel imagination and critical thinking such as books, videos, podcasts, and films, with my partner, while enjoying long walks and chilling in hammocks with our dog Dax, as we live a city-based life in Chicago on lands belonging to the Potawatomi, Ojibwe, and Odawa.
      </p>
      <p>
        I'm also an avid software developer who loves building web applications with an approach rooted in a genuine thrill for writing code, even after a career of {new Date().getFullYear() - 2012} years.
      </p>
      <figure className={styles.figure}>
        <Image
          className={styles.image}
          src="8ed54501-bdcb-40b7-9387-f2fc306db83d.png"
        />
        <figcaption className={styles.caption}>
          <address className={styles.author}>
            Kyle Gilbert
            <span className={styles.title}>See you out there</span>
          </address>
          <span className={styles.signature}>Kyle G.</span>
        </figcaption>
      </figure>
    </div>
  );
}
