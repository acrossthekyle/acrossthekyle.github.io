import Link from 'next/link';

import { Weight } from '@/ui/units';

import styles from './stylesheet';

type Props = {
  base: {
    imperial: string | number;
    metric: string;
  };
  consumable: {
    imperial: string | number;
    metric: string;
  };
  slug: string;
  total: {
    imperial: string | number;
    metric: string;
  };
  type?: string;
  worn: {
    imperial: string | number;
    metric: string;
  };
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
      percent: (Number(base.imperial)/Number(total.imperial)),
      value: base,
    },
    {
      label: 'Worn',
      percent: (Number(worn.imperial)/Number(total.imperial)),
      value: worn,
    },
    {
      label: 'Consumable',
      percent: (Number(consumable.imperial)/Number(total.imperial)),
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
      <Link className={styles.cta} href={`/gear/wiki?ref=${slug}`}>
        <strong>[?]</strong>
      </Link>
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
              title={`Filter list by ${label} items`}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.value}>
                <Weight weight={value} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
