import styles from './stylesheet';

type Props = {
  canRender: boolean;
  inViewRef: (node?: Element | null) => void;
};

export default function Caption({
  canRender,
  children,
  inViewRef,
}: React.PropsWithChildren<Props>) {
  return (
    <figcaption
      className={styles.container(canRender)}
      id="template-caption"
      ref={inViewRef}
    >
      <div className={styles.inner}>
        {children}
      </div>
    </figcaption>
  );
}
