import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export default function Paragraph({ children, className }: Props) {
  return (
    <p className={`${styles.container} ${className || ''}`.trim()}>
      {children}
    </p>
  );
}
