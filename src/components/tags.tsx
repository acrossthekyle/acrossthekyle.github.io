import Styles from '@/styles';

import Button from './button';

const scss = Styles.Components.Tags;

type Props = {
  className?: string;
  items: string[];
  mode?: string;
};

function Tags({ className = '', items, mode = 'primary' }: Props) {
  return (
    <div className={`${scss.tags} ${className}`.trim()}>
      {items.map((item: string) => (
        <Button
          href={`/tags/${encodeURIComponent(item)}`}
          key={item}
          mode={mode}
          text={item}
        />
      ))}
    </div>
  );
}

export default Tags;
