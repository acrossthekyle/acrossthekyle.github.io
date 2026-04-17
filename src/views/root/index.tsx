import { Content } from '@/layout';
import Divider from '@/ui/divider';
import Version from '@/ui/version';

import Albums from './albums';
import Clock from './clock';
// import Images from './images';
import styles from './stylesheet';
import Trails from './trails';

type Props = {
  data: {
    albums: Array<{
      category: string;
      coordinates: string;
      count: number;
      id: string;
      location: string;
      title: string;
      when: string;
    }>;
    resume: Array<{
      place: string;
      title: string;
      when: string;
    }>;
    trails: Array<{
      coordinates: string;
      id: string;
      location: string;
      title: string;
      type: string;
      when: string;
    }>;
  };
};

export default function View({ data }: Props) {
  return (
    <Content className={styles.container}>
      <div className={styles.definition} role="presentation">
        <Version />
        <Clock />
      </div>
      <h1 className={styles.header}>
        <span className={styles.emphasis}>A</span> Chicago-based millennial who balances long-distance trails & wild places with a career in software engineering.
      </h1>
      <p className={styles.updates}>
        <span className={`${styles.line} ${styles.emphasis}`}>Next adventure:</span>
          Salkantay Trek, Peru // Jul 26
      </p>
      <p className={styles.updates}>
        <span className={`${styles.line} ${styles.emphasis}`}>Current book:</span>
          Deaths end // Cixin Liu
      </p>
      <section className={styles.footer}>
        <p aria-label="easter eggs" className={styles.eggs}>
          <span>01001110 01000011 01000011 0x6A5 0x44</span>
          <span>115 112 97 114 116 97 110 32 49 49 55</span>
          <span>30332D 31332D3230 2D303 32D30342D3232</span>
        </p>
        <p aria-label="location" className={styles.location}>
          <span>41.8781° N 87.6298° W</span>
          <span>Sol // Orion Spur</span>
          <span>Milky Way</span>
        </p>
      </section>
      <Divider />
      <Trails data={data.trails} />
      <Albums data={data.albums} />
    </Content>
  );
}
