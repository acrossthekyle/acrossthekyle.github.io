import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  base: string;
  consumable: string;
  slug: string;
  total: string;
  type?: string;
  worn: string;
};

export default function Graph({
  base,
  consumable,
  slug,
  total,
  type,
  worn,
}: Props) {
  const segments = [
    {
      label: 'Base',
      percent: (Number(base)/Number(total)),
      value: base,
    },
    {
      label: 'Worn',
      percent: (Number(worn)/Number(total)),
      value: worn,
    },
    {
      label: 'Consumable',
      percent: (Number(consumable)/Number(total)),
      value: consumable,
    },
  ];

  const transformed = segments.map(segment => ({
    ...segment,
    percent: Math.sqrt(segment.percent),
  }));

  const scaled = transformed.map(segment => ({
    ...segment,
    percent: (segment.percent/100) * 100,
  }));

  return (
    <>
      <h2 className={styles.breakdown}>
        Weight breakdown {type !== undefined && `(${type})`}
        {type !== undefined && (
          <Link href={`/gear/${slug}`}>Reset</Link>
        )}
      </h2>
      <ul className={styles.graph}>
        {scaled.map(({ label, percent, value }) => (
          <li
            className={styles.segment(type?.toLowerCase() === label.toLowerCase())}
            key={label}
            style={{ width: `${percent * 100}%` }}
          >
            <Link className={styles.cta} href={`/gear/${slug}?type=${label.toLowerCase()}`}>
              <span className={styles.label}>{label}</span>
              <span className={styles.value}>{value} lbs</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
