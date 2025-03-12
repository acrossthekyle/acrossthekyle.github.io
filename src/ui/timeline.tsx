import styles from '@/styles/ui/timeline.module.scss';

import Button from './button';

type Segment = {
  cta?: string;
  eyeBrow: string;
  subTitle?: string;
  title: string;
  uri: string;
};

type Props = {
  indexPrefix?: string;
  segments: Segment[];
};

function Timeline({ indexPrefix, segments }: Props) {
  return (
    <>
      <div className={styles.anchor} id="timeline" />
      <div className={styles.container}>
        {segments.map(
          (
            { cta = 'View', eyeBrow, subTitle, title, uri }: Segment,
            index: number,
          ) => (
            <div className={styles.block} key={`segment-${index}`}>
              <span className={styles.index}>
                <span className={styles.number}>
                  {`${indexPrefix || ''} ${String(index + 1).padStart(2, '0')}`.trim()}
                </span>
              </span>
              <div aria-hidden="true" className={styles.marker} />
              <div className={styles.title}>
                {eyeBrow && <span>{eyeBrow}</span>}
                <h3>{title}</h3>
                {subTitle && <h4>{subTitle}</h4>}
                <Button className={styles.more} href={uri} text={cta} />
              </div>
            </div>
          ),
        )}
      </div>
    </>
  );
}

export default Timeline;
