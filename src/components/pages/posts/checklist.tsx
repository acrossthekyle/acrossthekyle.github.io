import styles from '@/styles/components/pages/posts/checklist.module.scss';

type Props = {
  items: string[];
};

function Checklist({ items }: Props) {
  return (
    <ul className={styles.checklist}>
      {items.map((item: string) => (
        <li className={styles.item} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Checklist;
