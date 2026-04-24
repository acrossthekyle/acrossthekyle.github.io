import styles from './stylesheet';

type Props = {
  truncate?: boolean;
};

export default function Paragraph({
  children,
  truncate,
}: React.PropsWithChildren<Props>) {
  return (
    <p
      className={
        `${styles.container} ${truncate ? styles.truncate : ''}`.trim()
      }
    >
      {children}
    </p>
  );
}
