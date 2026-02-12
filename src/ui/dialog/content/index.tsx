import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export default function Content({ children, className }: Props) {
  return (
    <div className={className ?? styles.container}>
      {children}
    </div>
  );
}
