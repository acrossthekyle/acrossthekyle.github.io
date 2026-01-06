import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export default function Eyebrow({ children, className }: Props) {
  return (
    <span className={`${styles.container} ${className || ''}`.trim()}>
      {children}
    </span>
  );
}
