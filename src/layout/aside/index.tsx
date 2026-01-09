import styles from './stylesheet';

type Props = {
  bottom?: boolean;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  top?: boolean;
};

export default function Aside({
  bottom,
  children,
  className,
  top,
}: Props) {
  return (
    <aside
      className={`${styles.container(bottom, top)} ${className || ''}`.trim()}
    >
      {children}
    </aside>
  );
}
