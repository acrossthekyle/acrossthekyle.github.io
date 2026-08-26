import { ArrowDown, ArrowUp, MoveRight } from 'lucide-react';

import tw from '@/styles';
import type { Timeline as TimelineType } from '@/types';
import { Ui } from '@/ui';

type Props = {
  timeline?: TimelineType[];
};

export default function Timeline({ timeline }: Props) {
  if (!timeline) {
    return null;
  }

  return (
    <article
      aria-label="timeline"
      className={styles.container}
      id="timeline"
    >
      <ul>
        {timeline.map((point, index) => (
          <li className={styles.group} key={index}>
            <h3 className={styles.label}>{point.label}</h3>
            <p className={styles.content}>
              <span className={styles.title}>
                {point.title.includes(' to ') ? (
                  <>
                    {point.title.split(' to ')[0]}
                    <MoveRight aria-label="to" className={styles.icon} />
                    {point.title.split(' to ')[1]}
                  </>
                ) : (
                  <>{point.title}</>
                )}
              </span>
              <span className={styles.data}>
                {point.data?.elevation && (
                  <span className={styles.elevation}>
                    <Ui.Units.Length isSmall value={point.data.elevation} />
                  </span>
                )}
                <span className={styles.stats}>
                  {(point.data?.distance || point.data?.time) && (
                    <span className={styles.velocity}>
                      {point.data?.distance && (
                        <span className={styles.stat}>
                          <Ui.Units.Length value={point.data.distance} />
                        </span>
                      )}
                      {point.data?.time && (
                        <span className={styles.stat}>
                          {point.data.time} hrs
                        </span>
                      )}
                    </span>
                  )}
                  {(point.data?.gain || point.data?.loss) && (
                    <span className={styles.change}>
                      {point.data?.gain && (
                        <span className={styles.change}>
                          <ArrowUp
                            aria-hidden="true"
                            className={styles.icon}
                          />
                          <Ui.Units.Length
                            isCompact
                            isSmall
                            value={point.data.gain}
                          />
                        </span>
                      )}
                      {point.data?.loss && (
                        <span className={styles.change}>
                          <ArrowDown
                            aria-hidden="true"
                            className={styles.icon}
                          />
                          <Ui.Units.Length
                            isCompact
                            isSmall
                            value={point.data.loss}
                          />
                        </span>
                      )}
                    </span>
                  )}
                </span>
              </span>
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

const styles = tw({
  container: `
    p-6
    border-t border-current/12.5
  `,
  header: `
    flex flex-row-reverse items-start justify-between
    mb-6
    uppercase
    font-black
    text-sm
    tracking-wide

    sm:text-xs
    lg:text-tiny
  `,
  index: `
    font-normal
    text-tiny text-current/50
  `,
  group: `
    relative
    flex
    mb-6

    last:mb-0
  `,
  label: `
    w-30
    pt-0.75
    text-xs
    uppercase

    sm:text-tiny
    sm:pt-0
    sm:w-24
  `,
  content: `
    flex flex-col gap-1
    w-full
    text-base

    sm:text-sm
    lg:text-xs
  `,
  title: `
    flex flex-wrap items-center gap-2
    font-black
    leading-[0.8]
  `,
  icon: `
    w-2.5 h-2.5
  `,
  data: `
    flex flex-col gap-1
    mt-1
    text-xs
    font-mono

    sm:text-tiny
  `,
  elevation: `
    font-sans
    text-xs

    sm:text-tiny
  `,
  change: `
    shrink-0
    flex items-center gap-1
    lowercase
  `,
  velocity: `
    shrink-0
    flex items-center gap-3
  `,
  stats: `
    flex gap-3
  `,
});
