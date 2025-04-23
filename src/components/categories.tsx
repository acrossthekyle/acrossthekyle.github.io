import Styles from '@/styles';

import Button from './button';

const scss = Styles.Components.Categories;

type Props = {
  className?: string;
  items: string[];
  mode?: string;
};

function Categories({ className = '', items, mode = 'primary' }: Props) {
  return (
    <div className={`${scss.container} ${className}`.trim()}>
      {items.map((item: string) => (
        <Button
          href={`/categories/${encodeURIComponent(item)}`}
          key={item}
          mode={mode}
          text={item}
        />
      ))}
    </div>
  );
}

export default Categories;
