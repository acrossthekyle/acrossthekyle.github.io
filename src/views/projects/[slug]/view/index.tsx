import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Article } from '@/ui/article';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  data: {
    date: string[];
    industry: string;
    location: string;
    overview: string;
    position: string;
    responsibilities: string[];
    title: string[];
    website: string | null;
  } | null;
};

export default function View({ data }: Props) {
  if (data === null) {
    return null;
  }

  return (
    <Article>
      <h1 className={styles.header}>
        {data.title.map((word: string) => (
          <span className="block" key={word}>
            {word}
          </span>
        ))}
      </h1>
      <time className={styles.time}>{data.date.join(' - ')}</time>
      <p className={styles.overview}>{data.overview}</p>
      <ul className={styles.list}>
        <li className={styles.parted}>
          <h2 className={styles.label}>Position</h2>
          <p>{data.position}</p>
        </li>
        <li className={styles.parted}>
          <h2 className={styles.label}>Location</h2>
          <p>{data.location}</p>
        </li>
        <li className={styles.parted}>
          <h2 className={styles.label}>Industry</h2>
          <p>{data.industry}</p>
        </li>
        {data.website && (
          <li className={styles.parted}>
            <h2 className={styles.label}>Website</h2>
            <Link href={`https://${data.website}`} rel="noreferrer" target="_blank">
              {data.website} <ArrowUpRight className={styles.icon} />
            </Link>
          </li>
        )}
      </ul>
      <h2 className={styles.heading}>Roles and Responsibilities</h2>
      <ul className={styles.list}>
        {data.responsibilities.map((responsibility, index) => (
          <li className={styles.role} key={index}>
            <span className={styles.index}>{padIndex(index + 1)}.</span>
            {responsibility}
          </li>
        ))}
      </ul>
    </Article>
  );
}
