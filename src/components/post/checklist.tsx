import Styles from '@/styles';

const scss = Styles.Components.Post.Checklist;

type Props = {
  items: string[];
};

function Checklist({ items }: Props) {
  return (
    <ul className={scss.checklist}>
      {items.map((item: string) => (
        <li className={scss.item} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Checklist;
