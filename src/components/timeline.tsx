import Styles from '@/styles';
import type { Components } from '@/types';

import Button from './button';

const scss = Styles.Components.Timeline;

type Props = {
  indexPrefix?: string;
  segments: Components.TimelineSegment[];
};

function Timeline({ indexPrefix, segments }: Props) {
  return (
    <>
      <div className={scss.anchor} id="timeline" />
      <ul className={scss.container}>
        {segments.map(
          (
            { cta = 'View', eyeBrow, title, uri }: Components.TimelineSegment,
            index: number,
          ) => (
            <li className={scss.block} key={`segment-${index}`}>
              <h3 className={scss.number}>
                {`${indexPrefix || ''} ${String(index + 1).padStart(2, '0')}`.trim()}
              </h3>
              <div aria-hidden="true" className={scss.marker} />
              <div className={scss.title}>
                <h3>{title}</h3>
                <Button className={scss.more} href={uri} text={cta} />
              </div>
            </li>
          ),
        )}
      </ul>
    </>
  );
}

export default Timeline;
