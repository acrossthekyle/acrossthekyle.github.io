import { Content } from '@/layout';
import Divider from '@/ui/divider';

import Albums from './albums';
import Images from './images';
import styles from './stylesheet';
import Trails from './trails';

type Props = {
  data: {
    albums: Array<{
      coordinates: string;
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
      skipTrail: boolean;
      title: string;
      type: string;
      when: string;
    }>;
  };
};

export default function View({ data }: Props) {
  return (
    <Content>
      <div className={styles.definition} role="presentation">
        <span className="text-left">
          Ver: 1701.D.48632.4 <span className="lowercase">c097d8d315b47fa992dfdeb3e6415e2dcd90e532</span>
        </span>
        <span className="text-right italic">Moving forward with intent</span>
      </div>
      <h1 className={styles.header}>
        <span className="italic">A</span> Chicago-based millennial who balances long-distance trails & wild places with a career in software engineering.
      </h1>
      <section aria-label="introduction" className={styles.introduction}>
        <span className={styles.subheader}>
          <span className="italic">Next adventure:</span><br />
            Salkantay Trek, Peru // Jul 26
        </span>
        <span className={styles.subheader}>
          <span className="italic">Current book:</span><br />
            Deaths end // Cixin Liu
        </span>
        <Images />
      </section>
      <Divider />
      <Trails data={data.trails} />
      <Albums data={data.albums} />
    </Content>
  );
}
