import Link from 'next/link';

import styles from './stylesheet';
import Wiki from './wiki';

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
    <section className={styles.container}>
      <h2 className={styles.header}>
        <strong>Weight breakdown</strong>
      </h2>
      <Wiki />
      <ul className={styles.graph}>
        {scaled.map(({ label, percent, value }) => (
          <li
            className={styles.segment(type?.toLowerCase() === label.toLowerCase())}
            key={label}
            style={{ width: `${percent * 100}%` }}
          >
            <Link
              className={styles.filter}
              href={
                type !== undefined && type === label.toLowerCase()
                  ? `/gear/${slug}`
                  : `/gear/${slug}?type=${label.toLowerCase()}`
              }
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.value}>{value} lbs</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
