import Link from 'next/link';

import styles from '@/styles/components/tags.module.scss';

type Props = {
  className?: string;
  items: string[];
  mode?: string;
};

function Tags({ className = '', items, mode = 'primary' }: Props) {
  return (
    <div className={`${styles.tags} ${className}`.trim()} data-mode={mode}>
      {items.map((item: string) => (
        <Link
          className={styles.tag}
          href={`/tags/${encodeURIComponent(item)}`}
          key={item}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}

export default Tags;
