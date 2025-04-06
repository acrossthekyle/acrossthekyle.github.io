import Styles from '@/styles';

import Button from './button';

const scss = Styles.Components.Timeline;

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
      <div className={scss.anchor} id="timeline" />
      <div className={scss.container}>
        {segments.map(
          (
            { cta = 'View', eyeBrow, subTitle, title, uri }: Segment,
            index: number,
          ) => (
            <div className={scss.block} key={`segment-${index}`}>
              <span className={scss.index}>
                <span className={scss.number}>
                  {`${indexPrefix || ''} ${String(index + 1).padStart(2, '0')}`.trim()}
                </span>
              </span>
              <div aria-hidden="true" className={scss.marker} />
              <div className={scss.title}>
                {eyeBrow && <span>{eyeBrow}</span>}
                <h3>{title}</h3>
                {subTitle && <h4>{subTitle}</h4>}
                <Button className={scss.more} href={uri} text={cta} />
              </div>
            </div>
          ),
        )}
      </div>
    </>
  );
}

export default Timeline;
