import styles from './stylesheet';

type Props = {
  canRender: boolean;
};

export default function Header({
  canRender,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <h2 className={styles.container(canRender)} id="dialog-header">
      {children}
    </h2>
  );
}
