import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export default function Heading({ children, className }: Props) {
  return (
    <h1 className={`${styles.container} ${className || ''}`.trim()} id="main-heading">
      {children}
    </h1>
  );
}
