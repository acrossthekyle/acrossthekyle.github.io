import styles from './stylesheet';

type Props = {
  canFloat?: boolean;
  canRender: boolean;
  index: number;
};

export default function Item({
  canFloat,
  canRender,
  children,
  index,
}: React.PropsWithChildren<Props>) {
  return (
    <li
      className={styles.container(canRender, canFloat)}
      style={{ transitionDelay: `${index * 0.125}s` }}
    >
      {children}
    </li>
  );
}
