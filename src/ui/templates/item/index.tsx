import styles from './stylesheet';

type Props = {
  canRender: boolean;
  index: number;
};

export default function Item({
  canRender,
  children,
  index,
}: React.PropsWithChildren<Props>) {
  return (
    <li
      className={styles.container(canRender)}
      style={{ transitionDelay: `${index * 0.125}s` }}
    >
      {children}
    </li>
  );
}
