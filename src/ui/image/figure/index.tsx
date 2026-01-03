import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  scale?: boolean;
};

export default function Figure({ children, className = '', scale }: Props) {
  return (
    <figure className={`${styles.figure(scale)} ${className}`.trim()}>
      {children}
    </figure>
  );
}
