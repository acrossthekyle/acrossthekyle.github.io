import Link from 'next/link';

import Styles from '@/styles';

const scss = Styles.Components.Tags;

type Props = {
  className?: string;
  items: string[];
  mode?: string;
};

function Tags({ className = '', items, mode = 'primary' }: Props) {
  return (
    <div className={`${scss.tags} ${className}`.trim()} data-mode={mode}>
      {items.map((item: string) => (
        <Link
          className={scss.tag}
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
