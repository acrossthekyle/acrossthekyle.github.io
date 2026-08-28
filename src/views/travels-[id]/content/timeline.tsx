import { ArrowDown, ArrowUp, MoveRight, Triangle } from 'lucide-react';

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
      <ul className={styles.items}>
        {timeline.map((point, index) => {
          const hasStats = point.data !== undefined;

          return (
            <li className={styles.group} key={index}>
              <h3 className={styles.label}>{point.label}</h3>
              <p className={styles.content}>
                <span className={styles.title}>
                  {point.title.includes(' to ') ? (
                    <>
                      {point.title.split(' to ')[0]}
                      <MoveRight
                        aria-label="to"
                        className={`${styles.to} ${styles.icon}`}
                      />
                      {point.title.split(' to ')[1]}
                    </>
                  ) : (
                    <span className={styles.single}>{point.title}</span>
                  )}
                  {point.data?.elevation && (
                    <span className={styles.elevation}>
                      <Triangle className={styles.icon} />
                      <Ui.Units.Length isSmall value={point.data.elevation} />
                    </span>
                  )}
                </span>
                {hasStats && (
                  <span className={styles.data}>
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
                )}
              </p>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

const styles = tw({
  container: `
    p-6 py-2
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
  items: `
    xs:grid
    xs:grid-cols-[max-content_1fr]
    xs:gap-y-4
  `,
  group: `
    relative
    flex flex-col
    text-base
    mb-4

    last:mb-0

    xs:grid
    xs:grid-cols-subgrid
    xs:col-span-2
    xs:items-start
    xs:gap-x-4
    xs:mb-0
    sm:text-sm
  `,
  label: `
    pt-1 pr-2
    uppercase
    whitespace-nowrap
    text-xs text-current/75

    sm:text-tiny
  `,
  content: `
    flex flex-col
    w-full
  `,
  title: `
    flex flex-wrap items-center
  `,
  single: `
    mr-2
  `,
  elevation: `
    flex items-center gap-2
    font-sans
  `,
  to: `
    mx-2
  `,
  icon: `
    w-2.5 h-2.5
    stroke-3
  `,
  data: `
    flex gap-3
    mt-0.25
    font-mono
    text-xs
    opacity-75

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
});
