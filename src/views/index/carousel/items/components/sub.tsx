import tw from '@/styles';

export default function Sub({ children }: React.PropsWithChildren) {
  return (
    <span className={styles.container}>{children}</span>
  );
};

const styles = tw({
  container: `
    opacity-75
  `,
});
