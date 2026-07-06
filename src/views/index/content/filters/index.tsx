import { styles } from './stylesheet';

type Props = {
  filter: string;
  onFilter: (value: string) => void;
};

const FILTERS = [
  'all',
  'destinations',
  'backpacking',
  'summits',
];

export default function Filters({ filter, onFilter }: Props) {
  return (
    <nav aria-label="selected travels filters">
      <ul className={styles.container}>
        {FILTERS.map((item) => (
          <li key={item}>
            <button
              className={styles.item}
              data-active={filter === item}
              onClick={() => onFilter(item)}
              type="button"
            >
              [{filter === item ? 'x' : ' '}] {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
