import tw from '@/styles';
import type { Timeline } from '@/types';
import { Ui } from '@/ui';

type Props = {
  timeline?: Timeline[];
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
        {timeline.map((point) => (
          <li className={styles.group} key={point.title}>
            <h3 className={styles.label}>{point.label}</h3>
            <p className={styles.content}>
              <span className={styles.title}>{point.title}</span>
              <span className={styles.data}>
                {point.data.elevation && (
                  <Ui.Units.Length isSmall value={point.data.elevation} />
                )}
                {point.data.summit && (
                  <span><Ui.Units.Length isSmall value={point.data.summit} /> summit / </span>
                )}
                {point.data.distance && (
                  <Ui.Units.Length value={point.data.distance} />
                )}
                {point.data.time && (
                  <> / {point.data.time} hours</>
                )}
                {point.data.gain && (
                  <> / <Ui.Units.Length isSmall value={point.data.gain} /> up</>
                )}
                {point.data.loss && (
                  <> / <Ui.Units.Length isSmall value={point.data.loss} /> down</>
                )}
              </span>
            </p>
          </li>
        ))}
        {/*<li className={styles.group}>
          <h3 className={styles.label}>Start</h3>
          <p className={styles.content}>
            <span className={styles.title}>
              Ch'allakancha
            </span>
            <span className={styles.data}>12,231 ft</span>
          </p>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Day 1</h3>
          <p className={styles.content}>
            <span className={styles.title}>
              Ch'allakancha &mdash; Soraypampa
            </span>
            <span className={styles.data}>
              3.1 miles / 3.5 hours / 2,345 ft gained
            </span>
          </p>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Side trek</h3>
          <p className={styles.content}>
            <span className={styles.title}>
              Humantay Lake
            </span>
            <span className={styles.data}>
              14,231 ft summit / 2.4 miles / 1.5 hours / 1,154 ft gained
            </span>
          </p>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Stage</h3>
          <p className={styles.content}>
            <span className={styles.title}>
              Soraypampa &mdash; Paucarcancha
            </span>
            <span className={styles.data}>14.5 miles &mdash; 8 hours</span>
          </p>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Landmark</h3>
          <p className={styles.content}>
            <span className={styles.title}>
              Salkantay Pass
            </span>
            <span className={styles.data}>15,931 ft</span>
          </p>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Stage</h3>
          <p className={styles.content}>
            <span className={styles.title}>
              Soraypampa &mdash; Paucarcancha
            </span>
            <span className={styles.data}>14.5 miles &mdash; 8 hours</span>
          </p>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Stage</h3>
          <p className={styles.content}>
            <span className={styles.title}>
              Soraypampa &mdash; Paucarcancha
            </span>
            <span className={styles.data}>14.5 miles &mdash; 8 hours</span>
          </p>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Stage</h3>
          <p className={styles.content}>
            <span className={styles.title}>
              Soraypampa &mdash; Paucarcancha
            </span>
            <span className={styles.data}>14.5 miles &mdash; 8 hours</span>
          </p>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>End</h3>
          <p className={styles.content}>
            <span className={styles.title}>
              Macchu Pichu
            </span>
            <span className={styles.data}>7,837 ft</span>
          </p>
        </li>*/}
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
    font-black
  `,
  data: `
    text-xs
    font-mono

    sm:text-tiny
  `,
});
