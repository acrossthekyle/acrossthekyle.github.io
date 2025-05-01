import Styles from '@/styles';

type Props = {
  items: string[];
};

function Checklist({ items }: Props) {
  return (
    <ul>
      {items.map((item: string) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default Checklist;
