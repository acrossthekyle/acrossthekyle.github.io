'use client';

import {
  Directory,
  DirectoryHover,
  DirectoryItem,
  DirectoryLink,
  DirectoryText,
  DirectoryItems,
} from '@/ui/directory';

import { useModel } from './model';
import styles from './stylesheet';

type Data = {
  date: string;
  location: string;
  slug: string;
  title: string[];
  type: string;
};

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  const { ref } = useModel();

  return (
    <Directory>
      <DirectoryItems>
        {data.map((item, index: number) => (
          <DirectoryItem index={index} key={index}>
            <DirectoryLink href={`/wanderings/${item.slug}`} ref={ref}>
              <DirectoryText index={index} words={item.title} />
              <DirectoryHover>
                <span className={styles.type}>{item.type}</span>
                <span className={styles.location}>{item.location}</span>
                <span className={styles.date}>{item.date}</span>
              </DirectoryHover>
            </DirectoryLink>
          </DirectoryItem>
        ))}
      </DirectoryItems>
    </Directory>
  );
}
